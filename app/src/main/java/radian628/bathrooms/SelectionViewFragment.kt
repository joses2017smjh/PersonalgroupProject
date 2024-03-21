package radian628.bathrooms

import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.ktx.Firebase
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.firestore.toObjects

class SelectionViewFragment: Fragment(R.layout.selection_view_main) {
    private val viewModel: SelectionViewViewModel by viewModels()
    private lateinit var floorRecyclerView: RecyclerView
    private lateinit var buildingTitle: TextView
//    private val args:
//    private lateinit var floorList : ArrayList<Floor>

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val closeBtn = view.findViewById<ImageView>(R.id.arrow_right)
        buildingTitle = view.findViewById<TextView>(R.id.building_name)
        floorRecyclerView = view.findViewById(R.id.main_recyclerview)
        floorRecyclerView.setHasFixedSize(true)
        floorRecyclerView.layoutManager = LinearLayoutManager(view.context)

        viewModel.bathrooms.observe(viewLifecycleOwner) { bathrooms ->
            if (bathrooms != null) {
                Log.d("loaded data", bathrooms.toString())
                Log.d("loaded data", "Im not null!")
                val adapter = FloorRecyclerViewAdapter(bathrooms)
                floorRecyclerView.adapter = adapter
            }

        }

    }

    override fun onResume() {
        super.onResume()
        val buildingName = arguments?.getString("building_name") ?: ""
        buildingTitle.text = buildingName
        viewModel.loadData(buildingName)

    }

//    override fun onStart() {
//        super.onStart()
//        val buildingName = arguments?.getString("building_name") ?: ""
//        Log.d("BUILDING NAME", buildingName)
//        viewModel.loadData(buildingName)
//    }

}