package radian628.bathrooms

import android.app.FragmentManager
import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.viewinterop.AndroidView
import com.google.firebase.Firebase
import com.google.firebase.firestore.firestore
import radian628.bathrooms.ui.theme.MyApplicationTheme




class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.main_activity) // Ensure you have activity_main.xml

        // this is just a test to make sure that firebase is working
        // feel free to remove it at any point, though it might be
        // useful as a reference
        val db = Firebase.firestore
        db.collection("Bathroom")
            .document("0001597e0437e45fa90525ff8f94e3709b072669")
            .get()
            .addOnSuccessListener {
                document -> System.out.println("loaded test data: ${document.data}")
            }

        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, SearchListViewFragment()) // Use the ID of your FrameLayout container
                .commit()
        }
    }
    override fun onStart() {
        super.onStart()
    }

}
@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}
