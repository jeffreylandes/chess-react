import { GeoJSON } from "geojson";

interface RestaurantFootprint {
    name: string,
    geometry: GeoJSON
}

function drawRestaurantFootprint(restaurant: RestaurantFootprint) {
    console.log("nothing to see here");
}