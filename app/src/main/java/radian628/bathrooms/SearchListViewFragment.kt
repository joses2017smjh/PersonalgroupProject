package radian628.bathrooms

import androidx.fragment.app.Fragment
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import radian628.bathrooms.Building
import radian628.bathrooms.R
import radian628.bathrooms.BuildingAdapter
import kotlin.random.Random

class SearchListViewFragment : Fragment() {

    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: BuildingAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_list_iteam_building, container, false)

        // Initialize the RecyclerView
        recyclerView = view.findViewById(R.id.recycler_view_buildings)
        recyclerView.layoutManager = LinearLayoutManager(activity)

        // Generate dummy data
        val dummyBuildings = generateDummyBuildings()

        // Set the adapter
        adapter = BuildingAdapter(dummyBuildings)
        recyclerView.adapter = adapter

        return view
    }
}

fun generateDummyBuildings(): List<Building> {
    val buildingNames = listOf(
        "Student Union", "Engineering Hall", "Science Center",
        "Art Building", "Business Complex", "Library Annex",
        "Health Services", "Recreation Center", "Dormitory East",
        "Dormitory West"
    )

    return buildingNames.map { name ->
        Building(
            floors = emptyList(),
            lat = Random.nextDouble(44.5600, 44.5700),
            lon = Random.nextDouble(-123.2800, -123.2500),
            distance = "${Random.nextDouble(50.0, 500.0).toInt()} ft away",
            rating = Random.nextDouble(3.0, 5.0).toFloat(),
            name = name
        )
    }
}
