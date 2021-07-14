import { IDeviceGeoService } from '@demo-nx-cross-ddd-plugin/meteo-domain';
import { Geolocation } from '@capacitor/geolocation';

// create Bridge Factory according DDD & SOLID best practices to inject dependencies
export const geolocationFactory = (): IDeviceGeoService  => {
  return {
    // IDeviceGeoService interface implementation 
    // using Capactor Geolocation Cross Platform Plugin 
    // to get the device location 
    currentLocation: () => Geolocation
      .getCurrentPosition()
      .then(pos => {
        const {
          coords: {
            latitude: lat = undefined,
            longitude: long = undefined
          }
        } = pos;
        return {lat, long}
      })
  }
}
