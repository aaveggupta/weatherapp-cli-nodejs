import { geocode, forecast } from "./utils.js";

const getWeatherUpdate = (place) => {
  if (!place) {
    return console.log("Please provide location!");
  }
  geocode(place, (error, { longitude, latitude, location } = {}) => {
    // default parameter for object because if there comes an error then second argument will be undefined and we can't destructure undefined.
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, { temperature, feelslike } = {}) => {
      if (error) {
        return console.log(error);
      }
      console.log(
        `The current temperature in ${location} is ${temperature}°C, but it feels like ${feelslike}°C.`
      );
    });
  });
};

getWeatherUpdate(process.argv[2]);
