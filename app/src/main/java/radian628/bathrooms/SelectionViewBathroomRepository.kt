package radian628.bathrooms

import android.util.Log
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.firestore.toObjects
import com.google.firebase.ktx.Firebase
import kotlinx.coroutines.*
import kotlinx.coroutines.tasks.await

class SelectionViewBathroomRepository() {
    // Function retrieves bathroom data from Firebase and sorts them into their respective floors
    private lateinit var floorList: ArrayList<Floor>

    suspend fun loadData(buildingName: String): ArrayList<Floor>{

        val db = Firebase.firestore
        floorList = ArrayList()


        // declare 8 lists for up to 8 floors
        val bathroomItem0 = ArrayList<Bathroom>()
        val bathroomItem1 = ArrayList<Bathroom>()
        val bathroomItem2 = ArrayList<Bathroom>()
        val bathroomItem3 = ArrayList<Bathroom>()
        val bathroomItem4 = ArrayList<Bathroom>()
        val bathroomItem5 = ArrayList<Bathroom>()
        val bathroomItem6 = ArrayList<Bathroom>()
        val bathroomItem7 = ArrayList<Bathroom>()


        try {
            val response = db.collection("Bathroom")
                .whereEqualTo("building_name", buildingName)
                .get().await()

            if (response != null) {
                Log.d("response results", response.toString().orEmpty())
            }

            val bathroomList = response.toObjects<Bathroom>()
            Log.d("BATHROOM LIST", bathroomList.toString())
//                    Result.success(bathroomList)
//            var idx = 0


            for (bathroom in bathroomList) {
                var idx = if (bathroomList[0].room_number.get(0) == '0') 1 else 0
                val currFloor = bathroom.room_number.get(idx)
                // sort bathroom into its floor
                when (currFloor) {
                    '0' -> bathroomItem0.add(bathroom)
                    '1' -> bathroomItem1.add(bathroom)
                    '2' -> bathroomItem2.add(bathroom)
                    '3' -> bathroomItem3.add(bathroom)
                    '4' -> bathroomItem4.add(bathroom)
                    '5' -> bathroomItem5.add(bathroom)
                    '6' -> bathroomItem6.add(bathroom)
                    '7' -> bathroomItem7.add(bathroom)
                }
            }

            // add floors if they exist
            if (bathroomItem0.size > 0) {
                floorList.add(Floor("Floor 0", bathroomItem0))
            }
            if (bathroomItem1.size > 0) {
                floorList.add(Floor("Floor 1", bathroomItem1))
            }
            if (bathroomItem2.size > 0) {
                floorList.add(Floor("Floor 2", bathroomItem2))
            }
            if (bathroomItem3.size > 0) {
                floorList.add(Floor("Floor 3", bathroomItem3))
            }
            if (bathroomItem4.size > 0) {
                floorList.add(Floor("Floor 4", bathroomItem4))
            }
            if (bathroomItem5.size > 0) {
                floorList.add(Floor("Floor 5", bathroomItem5))
            }
            if (bathroomItem6.size > 0) {
                floorList.add(Floor("Floor 6", bathroomItem6))
            }
            if (bathroomItem7.size > 0) {
                floorList.add(Floor("Floor 7", bathroomItem7))
            }
            Log.d("FLOOR LIST", floorList.toString())

            return floorList
        } catch(e: Exception) {
            Log.d("REPO ERROR", "Error: ${e.message.orEmpty()}")
            return ArrayList()
        }

    }

}

