package radian628.bathrooms


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.RatingBar
import android.widget.TextView

import androidx.navigation.findNavController
import androidx.navigation.fragment.NavHostFragment.Companion.findNavController
import androidx.recyclerview.widget.RecyclerView


class BuildingAdapter(private val buildingList: List<Building>) :
    RecyclerView.Adapter<BuildingAdapter.BuildingViewHolder>() {

    class BuildingViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val buildingName: TextView = view.findViewById(R.id.text_building_name)
        val distance: TextView = view.findViewById(R.id.text_distance)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BuildingViewHolder {
        val itemView = LayoutInflater.from(parent.context)
            .inflate(R.layout.list_item_building, parent, false)
        return BuildingViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: BuildingViewHolder, position: Int) {
        val building = buildingList[position]
        holder.buildingName.text = building.name
        holder.distance.text = building.distance

        val arrowRightImageView = holder.itemView.findViewById<ImageView>(R.id.arrow_right)
        arrowRightImageView.setOnClickListener {
            val bundle = Bundle()
            bundle.putString("building_name", building.name)
            it.findNavController().navigate(R.id.action_searchListViewFragment_to_selectionViewFragment, bundle)
        }

    }

    override fun getItemCount() = buildingList.size
}
