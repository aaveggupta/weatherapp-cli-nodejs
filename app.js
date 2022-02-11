import { geocode, forecast } from "./utils.js";

const getWeatherUpdate = (place) => {
  if (!place) {
    return console.log("Please provide location!");
  }
  geocode(place, (error, geocodeResponse) => {
    if (error) {
      return console.log(error);
    }
    forecast(
      geocodeResponse.latitude,
      geocodeResponse.longitude,
      (error, forecastResponse) => {
        if (error) {
          return console.log(error);
        }
        console.log(
          `The current temperature in ${geocodeResponse.location} is ${forecastResponse.temperature}°C, but it feels like ${forecastResponse.feelslike}°C.`
        );
      }
    );
  });
};

getWeatherUpdate(process.argv[2]);
