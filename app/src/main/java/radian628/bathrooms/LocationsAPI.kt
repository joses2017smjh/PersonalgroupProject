package radian628.bathrooms

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass
import com.squareup.moshi.Moshi
import retrofit2.Call
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Path
import retrofit2.http.Query
import java.util.Calendar
import retrofit2.converter.moshi.MoshiConverterFactory
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import okhttp3.ResponseBody

<<<<<<< HEAD
=======
@JsonClass(generateAdapter = true)
data class LocationsAPIBuildingLinks(
    val self: String?,
    val next: String?
)
>>>>>>> origin/jose

@JsonClass(generateAdapter = true)
data class LocationsAPIBuildingDataAttributes(
    val name: String,
<<<<<<< HEAD
    val abbreviation: String,
    val longitude: String,
    val latitude: String
=======
    val abbreviation: String?,
    val longitude: String?,
    val latitude: String?
>>>>>>> origin/jose
)

@JsonClass(generateAdapter = true)
data class LocationsAPIBuildingData(
    val id: String,
    val attributes: LocationsAPIBuildingDataAttributes
)

@JsonClass(generateAdapter = true)
data class LocationsAPIBuildings(
    @Json(name = "data")
<<<<<<< HEAD
    val data: List<LocationsAPIBuildingData>
=======
    val data: List<LocationsAPIBuildingData>,
    @Json(name = "links")
    val links: LocationsAPIBuildingLinks
>>>>>>> origin/jose
)

interface LocationsAPIService {
    @GET("./locations")
    fun locations(
        @Header("Authorization")
        authorization: String,
        @Query("q")
<<<<<<< HEAD
        building: String,
=======
        building: String?,
        @Query("lat")
        lat: Double?,
        @Query("lon")
        lon: Double?,
        @Query("distance")
        distance: Double?,
        @Query("distanceUnit")
        distanceUnit: String?,
        @Query("page[size]")
        page_size: Int?,
        @Query("page[number]")
        page_number: Int?
>>>>>>> origin/jose
    ): Call<LocationsAPIBuildings>

    @GET("./locations/{locationID}")
    fun locationsByLocationID(
        @Header("Authorization")
        authorization: String,
        @Path("locationID")
        locationID: String
    ): Call<LocationsAPIBuildingData>

    companion object {
        fun create() : LocationsAPIService {

            return Retrofit.Builder()
                .baseUrl("https://api.oregonstate.edu/v1/")
                .addConverterFactory(
                    MoshiConverterFactory.create(
                        Moshi.Builder()
                            .addLast(KotlinJsonAdapterFactory())
                            .build()
                    )
                )
                .build()
                .create<LocationsAPIService>(LocationsAPIService::class.java)
        }
    }
}

@JsonClass(generateAdapter = true)
data class GetLocationTokenResult(
    // if the token worked, this should be "approved"
    val status: String,
    // should be a number representing the number of seconds until the token expires
    val expires_in: String,
    val client_id: String,
    val access_token: String
)

interface GetLocationTokenService {
    @GET("/")
    fun getToken(): Call<GetLocationTokenResult>

    companion object {
        fun create(): GetLocationTokenService {
            return Retrofit.Builder()
                .baseUrl("https://getlocationtoken-7as3bl6ama-uc.a.run.app/")
                .addConverterFactory(
                    MoshiConverterFactory.create(
                        Moshi.Builder()
                            .addLast(KotlinJsonAdapterFactory())
                            .build()
                    )
                )
                .build()
                .create<GetLocationTokenService>(GetLocationTokenService::class.java)
        }
    }
}

class LocationsAPIRepository() {
    val locationService = LocationsAPIService.create()

    val tokenService = GetLocationTokenService.create()

    var token: String? = null
    var tokenExpiration: Long? = null
    fun getLocationsAPIToken(): String? {
        val now = System.currentTimeMillis()

        if (tokenExpiration != null && now < tokenExpiration!!) {
            return token
        }

        val tokenInfo = tokenService.getToken().execute().body()

        if (tokenInfo != null) {
            token = "Bearer ${tokenInfo.access_token}"
            tokenExpiration = tokenInfo.expires_in.toLong() * 1000 + now
            return token
        }

        return null
    }

<<<<<<< HEAD
    fun getAllBuildings(): List<Pair<String, Pair<Double, Double>>>? {
        val token = getLocationsAPIToken() ?: return null

        val response = locationService.locations(token, "").execute()

        if (response.isSuccessful) {
            val buildingsData = response.body()?.data
            val buildingsList = mutableListOf<Pair<String, Pair<Double, Double>>>()

            buildingsData?.forEach { buildingData ->
                val name = buildingData.attributes.name
                val latitude = buildingData.attributes.latitude.toDouble()
                val longitude = buildingData.attributes.longitude.toDouble()
                buildingsList.add(name to (latitude to longitude))
            }

            return buildingsList
        }

        return null
    }

    fun locations(building: String): Call<LocationsAPIBuildings>? {
        val token = getLocationsAPIToken() ?: return null

        return locationService.locations(token, building)
=======

    fun locations(
        building: String?,
        lat: Double?,
        lon: Double?,
        distance: Double?,
        distanceUnit: String?,
        page_size: Int?,
        page_number: Int?
    ): Call<LocationsAPIBuildings>? {

        val token = getLocationsAPIToken() ?: return null

        return locationService.locations(
            authorization = token,
            building = building,
            lat = lat,
            lon = lon,
            distance = distance,
            distanceUnit = distanceUnit,
            page_size = page_size,
            page_number = page_number
        )
>>>>>>> origin/jose
    }

    fun locationsByLocationID(
        locationID: String
    ): Call<LocationsAPIBuildingData>? {
        val token = getLocationsAPIToken() ?: return null

        return locationService.locationsByLocationID(token, locationID)
    }
}