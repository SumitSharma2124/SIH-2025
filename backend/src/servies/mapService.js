// src/services/mapService.js
const axios = require("axios");

// Example: Google Maps Geocoding API (convert address <-> coordinates)
// You need to put your Google Maps API key in .env as GOOGLE_MAPS_API_KEY

const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/geocode/json";

exports.getCoordinatesFromAddress = async (address) => {
  try {
    const response = await axios.get(GOOGLE_MAPS_API, {
      params: {
        address,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.results.length > 0) {
      return response.data.results[0].geometry.location; // { lat, lng }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error.message);
    throw new Error("Map service failed to get coordinates");
  }
};

exports.getAddressFromCoordinates = async (lat, lng) => {
  try {
    const response = await axios.get(GOOGLE_MAPS_API, {
      params: {
        latlng: `${lat},${lng}`,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.results.length > 0) {
      return response.data.results[0].formatted_address;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching address:", error.message);
    throw new Error("Map service failed to get address");
  }
};
