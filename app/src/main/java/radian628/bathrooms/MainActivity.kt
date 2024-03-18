package radian628.bathrooms

import android.app.FragmentManager
import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.Firebase
import com.google.firebase.firestore.firestore
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch


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

        val scope = CoroutineScope(Dispatchers.IO)

        scope.launch {
            System.out.println("LAUNCHING COROUTINE???")

            val locationsRepo = LocationsAPIRepository()

            System.out.println("LAUNCHING COROUTINE 2????")

            System.out.println(locationsRepo.locations("Kelley")?.execute()?.body())
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
