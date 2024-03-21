package radian628.bathrooms

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RelativeLayout
import android.widget.TextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class FloorRecyclerViewAdapter(private val floorItemList: List<Floor>)
    : RecyclerView.Adapter<FloorRecyclerViewAdapter.FloorRecyclerViewHolder>() {


    class FloorRecyclerViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val floorTitle : TextView = itemView.findViewById(R.id.floor_title)
        val imageView: ImageView = itemView.findViewById(R.id.arrow_imageview)
        val bathroomRecyclerView : RecyclerView = itemView.findViewById(R.id.child_rv)
        val linearLayout: LinearLayout = itemView.findViewById(R.id.linear_layout)
        val expandableLayout: RelativeLayout = itemView.findViewById(R.id.expandable_layout)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FloorRecyclerViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.floor_list_item, parent, false)
        return FloorRecyclerViewHolder(view)
    }

    override fun getItemCount(): Int {
        return floorItemList.size
    }

    override fun onBindViewHolder(holder: FloorRecyclerViewHolder, position: Int) {
        val floorItem = floorItemList[position]
        holder.floorTitle.text = floorItem.name

        // expandable functionality
        val isExpandable = floorItem.isExpandable
        if (isExpandable) {
            holder.imageView.setImageResource(R.drawable.ic_drop_up)
        } else {
            holder.imageView.setImageResource(R.drawable.ic_dropdown)
        }
        holder.expandableLayout.visibility = if (isExpandable) View.VISIBLE else View.GONE

        // setup adapter for showing bathrooms
        val adapter = BathroomRecyclerViewAdapter(floorItem.bathrooms)
        holder.bathroomRecyclerView.layoutManager = LinearLayoutManager(holder.itemView.context)
        holder.bathroomRecyclerView.setHasFixedSize(true)
        holder.bathroomRecyclerView.adapter = adapter

        // on click listener for each floor item
        holder.linearLayout.setOnClickListener {
            isAnyItemExpanded(position)
            floorItem.isExpandable = !floorItem.isExpandable
            notifyItemChanged(position)
        }

    }

    // Function to ensure only one floor item is expanded at a time
    private fun isAnyItemExpanded(position: Int) {
        val item = floorItemList.indexOfFirst {
            it.isExpandable
        }
        if (item >= 0 && item != position) {
            floorItemList[item].isExpandable = false
            notifyItemChanged(item)
        }
    }

}