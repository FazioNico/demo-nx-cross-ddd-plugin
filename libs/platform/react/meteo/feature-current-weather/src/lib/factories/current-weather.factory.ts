import { Meteo, IAPIService } from "@demo-nx-cross-ddd-plugin/meteo-domain";
import { fromFetch} from "rxjs/fetch";

export interface ApiWeather {
  name: string,
  main: {
    temp: number
  },
  weather: {icon: string}[]
}

// create advenced Bridge Factory according DDD & SOLID best practices to inject dependencies
export const currentWeatherFactory = (
  apiUrl: string, 
  apiKey: string
): IAPIService => {

  const httpClient = {
    get: <T>(url: string) => fromFetch<T>(url, {selector: (res)=> res.json()}),
    post: <T>(url: string, body: any) => fromFetch<T>(url, {body, method: 'POST', selector: (res)=> res.json()}),
    put: <T>(url: string, body: any) => fromFetch<T>(url, {body, method: 'PUT', selector: (res)=> res.json()}),
  }
  
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