import { GeolocationDataService, IDeviceGeoService  } from '@demo-nx-cross-ddd-plugin/meteo-domain';

export class GeolocationService extends GeolocationDataService {

  constructor(
    protected _deviceLocationService: IDeviceGeoService
  ) {
    super(_deviceLocationService);
  }
}