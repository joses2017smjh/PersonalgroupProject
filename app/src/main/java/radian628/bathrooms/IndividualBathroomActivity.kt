package radian628.bathrooms

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RatingBar
import android.widget.TextView
import androidx.activity.ComponentActivity
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.Firebase
import com.google.firebase.firestore.firestore
import com.google.firestore.v1.Document
import java.util.Date
import kotlin.math.roundToInt

class BathroomReviewAdapter : RecyclerView.Adapter<BathroomReviewAdapter.ViewHolder>() {
    var reviews = listOf<Review>()

    fun updateReviews(reviews: List<Review>) {
        this.reviews = reviews
        notifyDataSetChanged()
    }

    override fun getItemCount() = reviews.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.bathroom_review, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(reviews[position])
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private val ratingBar = itemView.findViewById<RatingBar>(R.id.bathroom_rating_stars)
        private val reviewTitle = itemView.findViewById<TextView>(R.id.review_title)
        private val reviewDesc = itemView.findViewById<TextView>(R.id.review_description)

        fun bind(review: Review) {
            val ctx = itemView.context
            ratingBar.rating = review.rating.toFloat()
            reviewTitle.text = review.title
            reviewDesc.text = review.description
        }
    }
}

class IndividualBathroomActivityFragment : Fragment(R.layout.individual_bathroom_fragment) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val bathroomReviewsView = view.findViewById<RecyclerView>(
            R.id.rv_bathroom_reviews
        )

        val adapter = BathroomReviewAdapter()

        bathroomReviewsView.adapter = adapter
        bathroomReviewsView.layoutManager = LinearLayoutManager(requireContext())

        val bathroomId = arguments?.getString("bathroom_id") ?: ""

        Firebase.firestore
            .collection("Bathroom")
            .document(bathroomId)
            .addSnapshotListener {
                document, exception -> run {

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

                    // adapter.updateReviews()

                    val roomNum = document?.data?.get("room_number") as? String ?: "???";
                    val building = document?.data?.get("building_name") as? String ?: "Unknown Building"

                    buildingAndFloorView.text = view.context.getString(
                        R.string.floor_and_name,
                        building,
                        "Floor ${roomNum[0]}")

                    bathroomRoomNumberView.text = "Room ${roomNum}"
                    bathroomRatingStarsView.rating = ((
                            document?.getDouble("rating")
                            ) ?: 0.0).toFloat()
                }
            }

        Firebase.firestore
            .collection("Reviews")
            .whereEqualTo("bathroom_id",
                    Firebase.firestore.collection("Bathroom").document(bathroomId)
                )
            .addSnapshotListener {
                documents, exception -> run {
                    val reviews = mutableListOf<Review>()

                    for (doc in documents?.documents ?: mutableListOf()) {
                        reviews.add(
                            Review(
                                bathroomId = bathroomId,
                                rating = doc.getDouble("rating") ?: 0.0,
                                description = doc.data?.get("description") as? String ?: "No Description Provided",
                                title = doc.data?.get("title") as? String ?: "No Title Provided",
                                postedAt = doc.data?.get("posted_at") as? Date ?: Date()
                            )
                        )
                    }

                    adapter.updateReviews(reviews)
                }
            }

        val reviewTitleInput = view.findViewById<EditText>(
            R.id.review_title_input
        )
        val reviewDescriptionInput = view.findViewById<EditText>(
            R.id.review_description_input
        )
        val reviewRatingInput = view.findViewById<RatingBar>(
            R.id.review_rating_input
        )
        val reviewSubmitButton = view.findViewById<Button>(
            R.id.review_submit_button
        )
        reviewSubmitButton.setOnClickListener {
            Firebase.firestore.collection("Reviews")
                .add(hashMapOf(
                    "bathroom_id" to Firebase.firestore
                        .collection("Bathroom")
                        .document(bathroomId),
                    "description" to reviewDescriptionInput.text.toString(),
                    "title" to reviewTitleInput.text.toString(),
                    "posted_at" to Date(),
                    "rating" to reviewRatingInput.rating
                ))
        }
    }


}

//fun populateIndividualBathroomView(view: View, bathroom: Bathroom) {
//    val genderView = view.findViewById<ImageView>(R.id.bathroom_gender_icon)
//    val buildingAndFloorView = view.findViewById<TextView>(
//        R.id.bathroom_building_and_floor
//    )
//    val bathroomRoomNumberView = view.findViewById<TextView>(
//        R.id.bathroom_room_number
//    )
//    val bathroomRatingStarsView = view.findViewById<RatingBar>(
//        R.id.bathroom_rating_stars
//    )
//
//    buildingAndFloorView.text = view.context.getString(
//        R.string.floor_and_name,
//        bathroom.floor.building.name,
//        bathroom.floor.name)
//    bathroomRoomNumberView.text =
//        bathroom.roomNumber
//    bathroomRatingStarsView.numStars =
//        bathroom.rating.roundToInt()
//    // TODO: Add gender image.
//}