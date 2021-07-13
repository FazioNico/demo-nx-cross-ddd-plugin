import { Meteo } from '@demo-nx-cross-ddd-plugin/meteo-domain';
import { CurrentWeatherService } from './services/current-weather.service';

export class MeteoFeatureCurrentWeather  {

  public currentWeather: Meteo|undefined;

  constructor(
    protected readonly _currentWeatherService: CurrentWeatherService
  ) {}

  async init(): Promise<void> {
    this.currentWeather = await this._currentWeatherService.init();
  }

}