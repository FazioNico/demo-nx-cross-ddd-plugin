import { Geolocation } from "../entities/geolocation";

export interface IDeviceGeoService {
  currentLocation: () => Promise<Geolocation>;
}

export class GeolocationDataService {
  constructor(
    protected _deviceLocationService: IDeviceGeoService
  ) { }

  async getCurrentLocation() {
    return await this._deviceLocationService.currentLocation();
  }
}