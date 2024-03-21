package radian628.bathrooms

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.gms.maps.SupportMapFragment
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Response

class SearchListViewFragment : Fragment() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: BuildingAdapter
    private val repository = LocationsAPIRepository() // Assuming this is your repository for fetching buildings

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_list_iteam_building, container, false)

        // Initialize the RecyclerView
        recyclerView = view.findViewById(R.id.recycler_view_buildings)
        recyclerView.layoutManager = LinearLayoutManager(activity)

        // Initialize the adapter with an empty list
        adapter = BuildingAdapter(listOf())
        recyclerView.adapter = adapter

        // Fetch buildings from the API
        fetchBuildings()

        return view
    }
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val buttonMapView = view.findViewById<Button>(R.id.buttonMapView)
        val buildingName = arguments?.getString("building_name")

        buttonMapView.setOnClickListener {
            // Navigate to the list view fragment using the action defined in the nav graph
            findNavController().navigate(R.id.navigate_to_map_view)
        }


    }

    private fun fetchBuildings() {
        CoroutineScope(Dispatchers.IO).launch {
            try {
                val response = repository.locations(
                    building = null,
                    distance = null,
                    distanceUnit = null,
                    lat = null,
                    lon = null,
                    page_number = 1,
                    page_size = 200
                )?.execute()

                if (response != null) {
                    if (response.isSuccessful) {
                        val buildingsApiData = response.body()?.data ?: listOf()
                        val buildings = buildingsApiData.map { apiBuilding ->
                            Building(
                                floors = listOf(), // Adapt based on your data structure
                                lat = apiBuilding.attributes.latitude?.toDoubleOrNull() ?: 0.0,
                                lon = apiBuilding.attributes.longitude?.toDoubleOrNull() ?: 0.0,
                                distance = "Unknown", // You might need to calculate or transform this based on your requirements
                                rating = 0.0f, // Adapt based on your data structure
                                name = apiBuilding.attributes.name ?: "N/A"
                            )
                        }
                        updateRecyclerView(buildings)
                    } else {
                        // Handle the error
                        println("API call unsuccessful: ${response.message()}")
                    }
                }
            } catch (e: Exception) {
                // Handle the exception
                println("Error fetching buildings: ${e.message}")
            }
        }
    }

    private fun updateRecyclerView(buildings: List<Building>) {
        CoroutineScope(Dispatchers.Main).launch {
            adapter = BuildingAdapter(buildings)
            recyclerView.adapter = adapter
        }
    }
}
