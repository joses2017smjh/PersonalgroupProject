package radian628.bathrooms

import android.content.Context
import androidx.room.Dao
import androidx.room.Database
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.OnConflictStrategy.Companion.REPLACE
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.Room
import androidx.room.RoomDatabase
import kotlinx.coroutines.flow.Flow

@Entity
data class BuildingInfoCacheEntry(
    @PrimaryKey
    val buildingName: String,
    val numBathrooms: Int
)

@Dao
interface BuildingInfoDAO {
    @Insert(onConflict = REPLACE)
    suspend fun insert(ce: BuildingInfoCacheEntry)

    @Query("SELECT * FROM BuildingInfoCacheEntry")
    fun getNumBathrooms(): Flow<List<BuildingInfoCacheEntry>>
}

class SavedCitiesRepository(
    private val dao: BuildingInfoDAO
) {
    suspend fun insert(ce: BuildingInfoCacheEntry) = dao.insert(ce)

    fun getNumBathrooms() = dao.getNumBathrooms()
}

@Database(entities = [BuildingInfoCacheEntry::class], version = 1)
abstract class BuildingInfoDatabase : RoomDatabase() {
    abstract fun buildingInfoDAO() : BuildingInfoDAO
    
    companion object {
        @Volatile private var instance: BuildingInfoDatabase? = null

        private fun buildDatabase(context: Context) =
            Room.databaseBuilder(
                context,
                BuildingInfoDatabase::class.java,
                "building-info-db"
            ).build()

        fun getInstance(context: Context): BuildingInfoDatabase
            = instance ?: synchronized(this) {
                instance ?: buildDatabase(context).also {
                    instance = it
                }
        }
    }
}