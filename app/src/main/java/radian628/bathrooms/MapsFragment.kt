package radian628.bathrooms

import androidx.fragment.app.Fragment
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MapsFragment : Fragment() {
    private lateinit var googleMap: GoogleMap
    private val repository = LocationsAPIRepository()
    private val oregonStateUniversity = LatLng(44.5646, -123.2796) // Coordinates for Oregon State University
    private val TAG = "MapsFragment"
    private val callback = OnMapReadyCallback { map ->
        googleMap = map
        googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(oregonStateUniversity, 16f))
        fetchBuildingsAndAddMarkers()
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
    }

    private fun fetchBuildingsAndAddMarkers() {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val response = repository.locations(
                    building = null,
                    distance = null,
                    distanceUnit = null,
                    lat = null,
                    lon = null,
                    page_number = 3,
                    page_size = 10
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
                            // Switch to the main thread before adding the marker
                            launch(Dispatchers.Main) {
                                googleMap.addMarker(markerOptions)
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

}
