    package radian628.bathrooms

    import android.content.Intent
    import androidx.fragment.app.Fragment
    import android.os.Bundle
    import android.util.Log
    import android.view.LayoutInflater
    import android.view.View
    import android.view.ViewGroup
    import android.widget.Button
    import android.widget.ImageView
    import android.widget.TextView
    import androidx.navigation.fragment.findNavController
    import com.google.android.gms.maps.CameraUpdateFactory
    import com.google.android.gms.maps.GoogleMap
    import com.google.android.gms.maps.OnMapReadyCallback
    import com.google.android.gms.maps.SupportMapFragment
    import com.google.android.gms.maps.model.BitmapDescriptorFactory
    import com.google.android.gms.maps.model.LatLng
    import com.google.android.gms.maps.model.Marker
    import com.google.android.gms.maps.model.MarkerOptions
    import com.google.firebase.Firebase
    import com.google.firebase.firestore.firestore
    import kotlinx.coroutines.CoroutineScope
    import kotlinx.coroutines.Dispatchers
    import kotlinx.coroutines.launch
    import kotlinx.coroutines.tasks.await
    import retrofit2.Call
    import retrofit2.Callback
    import retrofit2.Response
    import java.util.Date

    class MapsFragment : Fragment() {
        private lateinit var googleMap: GoogleMap
        private val repository = LocationsAPIRepository()
        private val oregonStateUniversity = LatLng(44.5646, -123.2796) // Coordinates for Oregon State University
        private val TAG = "MapsFragment"
        private val callback = OnMapReadyCallback { map ->
            googleMap = map
            googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(oregonStateUniversity, 17f))
            fetchBuildingsAndAddMarkers()
            //TODO implement completely once the building list view is available
           /* googleMap.setOnInfoWindowClickListener { marker ->
                // Retrieve the building data associated with the marker
                val buildingData = marker.tag as? Building
                // Check if the building data is not null
                buildingData?.let {
                    val buildingId = buildingData.name
                    val intent = Intent(context, IndividualBuildingActivity::class.java)
                    intent.putExtra("building_name", buildingId)
                    startActivity(intent)
                }
            }*/
        }

        override fun onCreateView(
            inflater: LayoutInflater,
            container: ViewGroup?,
            savedInstanceState: Bundle?
        ): View? {
            return inflater.inflate(R.layout.fragment_maps, container, false)
        }

        override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
            super.onViewCreated(view, savedInstanceState)
            val mapFragment = childFragmentManager.findFragmentById(R.id.map) as SupportMapFragment?
            mapFragment?.getMapAsync(callback)

            val buttonMapView = view.findViewById<Button>(R.id.buttonMapView)
            val buttonListView = view.findViewById<Button>(R.id.buttonListView)

            buttonListView.setOnClickListener {
                // Navigate to the list view fragment using the action defined in the nav graph
                findNavController().navigate(R.id.navigate_to_list_view)
            }
        }

        private fun fetchBuildingsAndAddMarkers() {
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    val bathroomCountMap = getNumBathrooms()
                    val response = repository.locations(
                        building = null,
                        distance = null,
                        distanceUnit = null,
                        lat = null,
                        lon = null,
                        page_number = 1,
                        page_size = 200
                    )?.execute()

                    if (response?.isSuccessful == true) {


                        val buildings = response.body()?.data
                        buildings?.forEach { buildingData ->
                            val latitude = buildingData.attributes.latitude?.toDoubleOrNull()
                            val longitude = buildingData.attributes.longitude?.toDoubleOrNull()
                            if (latitude != null && longitude != null) {
                                val position = LatLng(latitude, longitude)
                                val markerOptions = MarkerOptions()
                                    .position(position)
                                    .title(buildingData.attributes.name)
                                    //.icon(BitmapDescriptorFactory.fromResource(R.drawable.custom_marker_icon))
                                // Switch to the main thread before adding the marker

                                launch(Dispatchers.Main) {

                                    googleMap.addMarker(markerOptions)

                                    // Set custom info window adapter
                                    googleMap.setInfoWindowAdapter(object : GoogleMap.InfoWindowAdapter {
                                        override fun getInfoWindow(p0: Marker): View? {
                                            val infoView = layoutInflater.inflate(R.layout.custom_info_window, null)
                                            // Get views
                                            val buildingNameTextView: TextView = infoView.findViewById(R.id.buildingNameTextView)
                                            val numBathroomsTextView: TextView = infoView.findViewById(R.id.numBathrooms)

                                            // Set building name
                                            var numbath = bathroomCountMap[p0.title]
                                            if (numbath == null) {
                                                numbath = 0
                                            }
                                            buildingNameTextView.text = p0.title ?: ""
                                            buildingNameTextView.setCompoundDrawablesWithIntrinsicBounds(0,0,R.drawable.ic_next,0)
                                            numBathroomsTextView.text = "Number of Bathrooms: ${numbath}"
                                            return infoView
                                        }

                                        override fun getInfoContents(p0: Marker): View? {
                                            return null
                                        }
                                    })


                                }
                            }
                        }
                    } else {
                        Log.e(TAG, "API call unsuccessful: ${response?.message()}")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error fetching buildings: ${e.message}", e)
                }
            }
        }

        private suspend fun getNumBathrooms(): Map<String, Int> {
            val response = Firebase.firestore.collection("Bathroom").get().await()

            val bathroomCountMap = mutableMapOf<String, Int>()
            for (document in response.documents) {
                val buildingName = document.getString("building_name")
                if (buildingName != null) {
                    val count = bathroomCountMap.getOrDefault(buildingName, 0)
                    bathroomCountMap[buildingName] = count + 1
                }
            }
            return bathroomCountMap
        }
    }
