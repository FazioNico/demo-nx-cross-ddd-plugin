import { Injectable } from '@angular/core';
import { CurrentWeatherService } from '@demo-nx-cross-ddd-plugin/meteo-feature-current-weather';
import { GeolocationService } from '../geolocation/geolocation.service';
import { WeatherService } from '../weather/weather.service';

@Injectable()
export class DataService extends CurrentWeatherService {

  constructor(
    protected readonly _meteoService: WeatherService,
    protected readonly _geoService: GeolocationService
  ) {
    super(_meteoService, _geoService);;
  }
}