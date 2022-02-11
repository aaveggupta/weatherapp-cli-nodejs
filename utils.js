import request from "postman-request";
import { WEATHERSTACK_SECRET, MAPBOX_SECRET } from "./secrets.js";

export const geocode = (place, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    place
  )}.json?access_token=${MAPBOX_SECRET}&limit=1`;
  // If there is an error, then reponse is undefined and vice-versa
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to location services.`, undefined);
    } else if (response.body.features.length === 0) {
      callback(`Unable to find place. Try another search!`, undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

export const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_SECRET}&query=${latitude},${longitude}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(`Unable to connect to weather services`, undefined);
    } else if (response.body.error) {
      callback(`Unable to find location`, undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
      });
    }
  });
};
