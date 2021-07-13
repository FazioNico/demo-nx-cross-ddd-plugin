import { 
  Geolocation, 
  GeolocationDataService, 
  Meteo, 
  MeteoDataService, 
  RequestCurrentGeolocation, 
  RequestCurrentWeather 
} from "@demo-nx-cross-ddd-plugin/meteo-domain";

export class CurrentWeatherService implements RequestCurrentWeather, RequestCurrentGeolocation {
  
  constructor(
    protected readonly _meteoService: MeteoDataService,
    protected readonly _geoService: GeolocationDataService
  ) {}

  async init(): Promise<Meteo> {
    const {lat, long} = await this.getCurrentLocation();
    if (!lat || !long) {
      throw Error('Unexisting data location')
    }
    const meteoData = await this.getCurrentWeather(lat, long);
    return meteoData;
  }

  async getCurrentWeather(lat: number, long: number): Promise<Meteo> {
    return await this._meteoService.currentWeather(lat, long);    
  }

  async getCurrentLocation(): Promise<Geolocation> {
    return this._geoService.getCurrentLocation();
    ;
  }
}