package radian628.bathrooms

import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.RatingBar
import android.widget.TextView
import androidx.activity.ComponentActivity
import androidx.fragment.app.Fragment
import com.google.firebase.Firebase
import com.google.firebase.firestore.firestore
import com.google.firestore.v1.Document
import kotlin.math.roundToInt

class IndividualBathroomActivityFragment : Fragment(R.layout.individual_bathroom_fragment) {
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        Firebase.firestore
            .collection("Bathroom")
            .document("0001597e0437e45fa90525ff8f94e3709b072669")
            .get()
            .addOnSuccessListener {
                document -> run {
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

                    val roomNum = document.data?.get("room_number") as? String ?: "???";
                    val building = document.data?.get("building_name") as? String ?: "Unknown Building"

                    buildingAndFloorView.text = view.context.getString(
                        R.string.floor_and_name,
                        building,
                        // TODO: replace with floor number if possible
                        roomNum)

                    bathroomRoomNumberView.text = roomNum
                    bathroomRatingStarsView.numStars = ((
                            document.data?.get("rating") as? Double
                            ) ?: 0.0).roundToInt()
                }
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