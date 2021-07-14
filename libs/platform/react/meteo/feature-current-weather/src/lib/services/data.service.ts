import { GeolocationDataService, MeteoDataService } from "@demo-nx-cross-ddd-plugin/meteo-domain";
import { CurrentWeatherService } from "@demo-nx-cross-ddd-plugin/meteo-feature-current-weather";

export class DataService extends CurrentWeatherService {
  
  constructor(    
    protected readonly _meteoService: MeteoDataService,
    protected readonly _geoService: GeolocationDataService
  ) { 
    super(_meteoService, _geoService);
  }

}