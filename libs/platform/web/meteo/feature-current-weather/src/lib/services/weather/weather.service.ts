import { Inject, Injectable } from '@angular/core';
import { IAPIService, MeteoDataService  } from '@demo-nx-cross-ddd-plugin/meteo-domain';
import { WEATHER_SERVICE } from '@demo-nx-cross-ddd-plugin/platform-web-shared-feature-tokens';


@Injectable()
export class WeatherService extends MeteoDataService {

  constructor(
    @Inject(WEATHER_SERVICE) protected _api: IAPIService
  ) {
    super(_api);
  }
}