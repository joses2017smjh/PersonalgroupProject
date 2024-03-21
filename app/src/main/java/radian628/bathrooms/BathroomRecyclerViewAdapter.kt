package radian628.bathrooms

import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.RatingBar
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.recyclerview.widget.RecyclerView
import androidx.navigation.fragment.findNavController

class BathroomRecyclerViewAdapter(private val bathroomList: List<Bathroom>):

    RecyclerView.Adapter<BathroomRecyclerViewAdapter.BathroomViewHolder>() {
    class BathroomViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val title: TextView = itemView.findViewById(R.id.bathroom_title)
        val genderIcon : ImageView = itemView.findViewById(R.id.gender_icon)
        val rating: RatingBar = itemView.findViewById(R.id.selection_view_rating)
        val card: CardView = itemView.findViewById(R.id.bathroom_item_cardview)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BathroomViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.bathroom_list_item, parent, false)
        return BathroomViewHolder(view)
    }

    override fun getItemCount(): Int {
        return bathroomList.size
    }

    override fun onBindViewHolder(holder: BathroomViewHolder, position: Int) {
        holder.title.text = bathroomList[position].room_number
        holder.rating.rating = bathroomList[position].rating.toFloat()
        // set gender icon
        if (bathroomList[position].gender == "FEMALE") {
            holder.genderIcon.setImageResource(R.drawable.ic_girl)
        } else if (bathroomList[position].gender == "MALE") {
            holder.genderIcon.setImageResource(R.drawable.ic_boy)
        } else {
            holder.genderIcon.setImageResource(R.drawable.ic_inclusive_symbol)
        }
        holder.card.setOnClickListener {
            Log.d("ClickedBathroom", "You clicked me!")
//            val directions =
        }
    }
}