package radian628.bathrooms

import android.os.Bundle
import android.util.Log
import android.view.View
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
//    private val args:
//    private lateinit var floorList : ArrayList<Floor>

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
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

    override fun onStart() {
        super.onStart()
        viewModel.loadData("The Valley Library")
    }

}