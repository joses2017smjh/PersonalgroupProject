package radian628.bathrooms

import androidx.fragment.app.Fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.LatLngBounds
import com.google.android.gms.maps.model.MarkerOptions

class MapsFragment : Fragment() {
    private lateinit var googleMap: GoogleMap

    private val oregonStateUniversity = LatLng(44.5646, -123.2796) // Coordinates for Oregon State University
    private val oregonStateUniversityBounds = LatLngBounds(
        LatLng(44.557, -123.286),  // Southwest bound of the campus area
        LatLng(44.573, -123.27)    // Northeast bound of the campus area
    )

    private val repository = LocationsAPIRepository()

    private val callback = OnMapReadyCallback { map ->


        /**
         * Manipulates the map once available.
         * This callback is triggered when the map is ready to be used.
         * This is where we can add markers or lines, add listeners or move the camera.
         * In this case, we just add a marker near Sydney, Australia.
         * If Google Play services is not installed on the device, the user will be prompted to
         * install it inside the SupportMapFragment. This method will only be triggered once the
         * user has installed Google Play services and returned to the app.
         */
        googleMap = map // Assigning the initialized GoogleMap to the global variable
        googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(oregonStateUniversity, 16f))
        addMarkersForBuildings()
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

    private fun addMarkersForBuildings() {
        // Ensure googleMap is initialized before proceeding
        if (::googleMap.isInitialized) {
            //val buildings = repository.getAllBuildings()

            /*buildings?.forEach { (buildingName, coordinates) ->
                val markerOptions = MarkerOptions()
                    .position(LatLng(coordinates.first, coordinates.second))
                    .title(buildingName)
                googleMap.addMarker(markerOptions)
            }*/
        }
    }
}