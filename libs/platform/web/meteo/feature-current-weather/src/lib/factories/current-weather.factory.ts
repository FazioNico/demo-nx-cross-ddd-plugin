import { HttpClient } from "@angular/common/http";
import { Meteo, IAPIService } from "@demo-nx-cross-ddd-plugin/meteo-domain";

export interface ApiWeather {
  name: string,
  main: {
    temp: number
  },
  weather: {icon: string}[]
}

// create advenced Bridge Factory according DDD & SOLID best practices to inject dependencies
export const currentWeatherFactory = (
  httpClient: HttpClient, 
  apiUrl: string, 
  apiKey: string
): IAPIService => {
  return {
    // IAPIService interface implementation 
    // using Angular HttpClient to make a request to the API
    getCurrentWeather: async (lat, long) => {
      return await httpClient
        .get<ApiWeather>(`${apiUrl}?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`)
        .toPromise()
        .then(data => {
          // data normalization format
          return Meteo.create({
            name: data?.name,
            icon: data?.weather?.shift()?.icon || undefined,
            temp: data?.main?.temp ? Math.floor(data?.main?.temp) : undefined
          })            
        });
    }
  };
};