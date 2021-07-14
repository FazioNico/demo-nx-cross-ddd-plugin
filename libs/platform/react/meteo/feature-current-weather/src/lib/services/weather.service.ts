import { IAPIService, MeteoDataService } from '@demo-nx-cross-ddd-plugin/meteo-domain';

export class WeatherService extends MeteoDataService {

  constructor(
    protected _api: IAPIService
  ) {
    super(_api);
  }
}