package radian628.bathrooms


import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.RatingBar
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView


class BuildingAdapter(private val buildingList: List<Building>) :
    RecyclerView.Adapter<BuildingAdapter.BuildingViewHolder>() {

    class BuildingViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val buildingName: TextView = view.findViewById(R.id.text_building_name)
        val distance: TextView = view.findViewById(R.id.text_distance)
        val ratingBar: RatingBar = view.findViewById(R.id.bathroom_rating_stars)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BuildingViewHolder {
        val itemView = LayoutInflater.from(parent.context)
            .inflate(R.layout.list_iteam_building, parent, false)
        return BuildingViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: BuildingViewHolder, position: Int) {
        val building = buildingList[position]
        holder.buildingName.text = building.name
        holder.distance.text = building.distance
        holder.ratingBar.rating = building.rating
    }

    override fun getItemCount() = buildingList.size
}
