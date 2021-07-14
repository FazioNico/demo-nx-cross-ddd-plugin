import { Route, Link } from 'react-router-dom';

import './platform-react-meteo-feature-current-weather.module.css';

/* eslint-disable-next-line */
export interface PlatformReactMeteoFeatureCurrentWeatherProps {}

export function PlatformReactMeteoFeatureCurrentWeather(
  props: PlatformReactMeteoFeatureCurrentWeatherProps
) {
  return (
    <div>
      <h1>Welcome to platform-react-meteo-feature-current-weather!</h1>

      <ul>
        <li>
          <Link to="/">platform-react-meteo-feature-current-weather root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => (
          <div>
            This is the platform-react-meteo-feature-current-weather root route.
          </div>
        )}
      />
    </div>
  );
}

export default PlatformReactMeteoFeatureCurrentWeather;
