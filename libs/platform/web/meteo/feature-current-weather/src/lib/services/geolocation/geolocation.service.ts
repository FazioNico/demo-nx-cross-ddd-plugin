import { Inject, Injectable } from '@angular/core';
import { GeolocationDataService, IDeviceGeoService  } from '@demo-nx-cross-ddd-plugin/meteo-domain';
import { DEVICE_LOCATION_SERVICE } from '@demo-nx-cross-ddd-plugin/platform-web-shared-feature-tokens';

@Injectable()
export class GeolocationService extends GeolocationDataService {

  constructor(
    @Inject(DEVICE_LOCATION_SERVICE) protected _deviceLocationService: IDeviceGeoService
  ) {
    super(_deviceLocationService);
  }
}