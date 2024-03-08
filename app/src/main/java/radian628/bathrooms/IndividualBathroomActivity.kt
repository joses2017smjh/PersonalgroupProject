package radian628.bathrooms

import android.os.Bundle
import android.view.View
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
import radian628.bathrooms.ui.theme.MyApplicationTheme
import kotlin.math.roundToInt

class IndividualBathroomActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    Greeting("Android")
                }
            }
        }
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