package radian628.bathrooms

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RatingBar
import android.widget.TextView
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.RecyclerView
import radian628.bathrooms.ui.theme.MyApplicationTheme
import kotlin.math.roundToInt

class IndividualBathroomActivityFragment : Fragment(R.layout.individual_bathroom_fragment) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
    }
}

fun populateIndividualBathroomView(view: View, bathroom: Bathroom) {
    val genderView = view.findViewById<ImageView>(R.id.bathroom_gender_icon)
    val buildingAndFloorView = view.findViewById<TextView>(
        R.id.bathroom_building_and_floor
    )
    val bathroomRoomNumberView = view.findViewById<TextView>(
        R.id.bathroom_room_number
    )
    val bathroomRatingStarsView = view.findViewById<RatingBar>(
        R.id.bathroom_rating_stars
    )

    buildingAndFloorView.text = view.context.getString(
        R.string.floor_and_name,
        bathroom.floor.building.name,
        bathroom.floor.name)
    bathroomRoomNumberView.text =
        bathroom.roomNumber
    bathroomRatingStarsView.numStars =
        bathroom.rating.roundToInt()
    // TODO: Add gender image.
}

class ReviewAdapter() : RecyclerView.Adapter<ReviewAdapter.ViewHolder>() {
    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val title = itemView.findViewById<TextView>(R.id.review_title)
        private val rating = itemView.findViewById<RatingBar>(R.id.bathroom_rating_stars)
        private val desc = itemView.findViewById<TextView>(R.id.review_description)
        fun bind(review: Review) {
            title.text = review.name
            rating.numStars = review.rating.roundToInt()
            desc.text = review.description
        }
    }

    var reviews = listOf<Review>()

    fun updateReviews(newReviews: List<Review>) {
        reviews = newReviews;
    }

    override fun getItemCount() = reviews.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.bathroom_review, parent, false)

        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(reviews[position])
    }
}