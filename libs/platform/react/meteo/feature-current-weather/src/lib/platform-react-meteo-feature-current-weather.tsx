import { MeteoFeatureCurrentWeather } from '@demo-nx-cross-ddd-plugin/meteo-feature-current-weather';
import { Meteo } from '@demo-nx-cross-ddd-plugin/meteo-domain';
import { meteoService } from './services';
import { useEffect, useState } from 'react';
import styles from './platform-react-meteo-feature-current-weather.module.css';

/* eslint-disable-next-line */
export interface PlatformReactMeteoFeatureCurrentWeatherProps {
  apiUrl: string;
  apiKey: string;
  imgUrl: string
}

export function PlatformReactMeteoFeatureCurrentWeather(
  props: PlatformReactMeteoFeatureCurrentWeatherProps
) {

  const [currentWeather, setCurrentWeather] = useState<Meteo>();
  
  useEffect(() => {
    const service = meteoService(props.apiUrl, props.apiKey);
    const weatherService = new MeteoFeatureCurrentWeather(service);
    weatherService
      .init()
      .then(()=> {
        setCurrentWeather(weatherService.currentWeather);
      })
  });

  // return the component DOM
  if (!currentWeather) {
    return (
      <div>
        loading...
      </div>
    );
  }
  return (
  <div className={styles.meteo + ' platform-react-meteo-feature-current-weather'}>
      <div id="mainWrapper">
        <p>{currentWeather?.temp}°C</p>
        <picture>
          <img src={props.imgUrl + '/'  + currentWeather?.icon + '@2x.png' } alt="icon"/>
        </picture>
      </div>
      <p>
        {currentWeather?.name}
      </p>
    </div>
  );
}

export default PlatformReactMeteoFeatureCurrentWeather;
