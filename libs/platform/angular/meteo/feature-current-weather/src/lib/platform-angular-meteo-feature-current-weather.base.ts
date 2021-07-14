import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DEVICE_LOCATION_SERVICE, WEATHER_SERVICE, WEATHER_API_KEY, WEATHER_API_URL } from "@demo-nx-cross-ddd-plugin/platform-angular-shared-feature-tokens";
import { currentWeatherFactory } from "./factories/current-weather.factory";
import { geolocationFactory } from "./factories/geolocation.factory";
import { DataService } from "./services/data/data.service";
import { GeolocationService } from "./services/geolocation/geolocation.service";
import { WeatherService } from "./services/weather/weather.service";

const PROVIDERS = [
  DataService,
  WeatherService,
  GeolocationService,
];

// Advenced Inversion of Dependency Injection (IoD)
// to provide the current weather data with `DataService`
const FACTORY_PROVIDERS = [
  // `currentWeatherFactory` is the factory function for `WeatherService`
  {
    provide: WEATHER_SERVICE, 
    useFactory: currentWeatherFactory, 
    deps: [HttpClient, WEATHER_API_URL, WEATHER_API_KEY]
  },
  // `geolocationFactory` is the factory function for `GeolocationService`
  {
    provide: DEVICE_LOCATION_SERVICE, 
    useFactory: geolocationFactory
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...PROVIDERS,
    ...FACTORY_PROVIDERS,
  ],
  exports: [
    CommonModule
  ]
})
export class MeteoFeatureCurrentWeatherBaseModule {
  // Angular Class Module without any router implemenation
  // You have to create Module with router implementation OR|AND Web Component implementation
  // to use this Feature UI Module.
};

