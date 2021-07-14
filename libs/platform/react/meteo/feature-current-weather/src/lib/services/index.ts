import { currentWeatherFactory } from "../factories/current-weather.factory";
import { geolocationFactory } from "../factories/geolocation.factory";

import { DataService } from "./data.service";
import { GeolocationService } from "./geolocation.service";
import { WeatherService } from "./weather.service";


export const meteoService = (apiUrl: string, apiKey: string) => {
  const weatherService = new WeatherService(currentWeatherFactory(apiUrl, apiKey));
  const geoService = new GeolocationService(geolocationFactory());
  return new DataService(weatherService, geoService);
}
