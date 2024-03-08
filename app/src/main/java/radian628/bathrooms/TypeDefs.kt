package radian628.bathrooms

import java.util.Date

public enum class BathroomGender {
    MALE, FEMALE, INCLUSIVE
}

public class Review(
    val bathroomId: String,

    // ranges from 1 to 5
    val rating: Double,

    val description: String,

    // when the review was posted
    // (Date might be deprecated so I may change this)
    val postedAt: Date
)

public data class Bathroom(
    // firebase ID for bathroom
    val id: String,

    // should be same as it appears IRL
    val roomNumber: String,

    // not sure whether to use building name or an ID linked to it
    // especially since the Locations API doesn't use name
    val buildingId: String,

    val gender: BathroomGender,
    val wheelchairAccessible: Boolean,

    // ranges from 1 to 5
    val rating: Double,

    val floor: Floor
)

public data class Floor(
    val name: String,
    val bathrooms: List<Bathroom>,
    val building: Building
)

public data class Building(
    val floors: List<Floor>,

    // coordinates
    val lat: Double,
    val lon: Double,

    val name: String
)
