package radian628.bathrooms

import java.util.Date

public enum class BathroomGender {
    MALE, FEMALE, INCLUSIVE
}

public class Review(
    val bathroomId: String,

    // ranges from 1 to 5
    val rating: Double,

    val title: String,

    val description: String,

    // when the review was posted
    // (Date might be deprecated so I may change this)
    val postedAt: Date
)

public data class Bathroom(
    // firebase ID for bathroom
//    val id: String?,

    // should be same as it appears IRL
    val room_number: String,

    // not sure whether to use building name or an ID linked to it
    // especially since the Locations API doesn't use name
    val building_name: String,

    val gender: String,
    val wheelchair_accessible: Boolean,

    // ranges from 1 to 5
    val rating: Double,

//    val floor: Floor
) {
    constructor() : this("dummy room", "dummy name", "dummy gender", false, 0.0)
}

public data class Floor(
    val name: String,
    val bathrooms: List<Bathroom>,
    var isExpandable: Boolean = false

)

public data class Building(
    val floors: List<Floor>,

    // coordinates
    val lat: Double,
    val lon: Double,
    val distance: String,
    val rating: Float,

    val name: String
)
