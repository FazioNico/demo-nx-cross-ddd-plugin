import { Meteo } from "../entities/meteo";

export interface IAPIService {
  getCurrentWeather: (lat: number, long: number) => Promise<Meteo>;
}

export class MeteoDataService {
  constructor(
    protected _api: IAPIService
  ) { }

  async currentWeather(lat: number, long: number) {
    return await this._api
      .getCurrentWeather(lat, long)
  }
}