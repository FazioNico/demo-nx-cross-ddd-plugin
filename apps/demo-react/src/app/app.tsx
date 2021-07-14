import { PlatformReactTodoFeatureList } from '@demo-nx-cross-ddd-plugin/platform-react-todo-feature-list';
import { PlatformReactMeteoFeatureCurrentWeather } from '@demo-nx-cross-ddd-plugin/platform-react-meteo-feature-current-weather'
import { Route, Link } from 'react-router-dom';
import { environment } from '../environments/environment';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <h1>Exemple Nx Cross DDD Plugin</h1>
            <p>Use librairy platform as features with React Router</p>
            <div role="navigation">
              <ul>
                <li>
                  <Link to="/todos">Feature Todos</Link>
                </li>
                <li>
                  <Link to="/meteo">Feature Meteo</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      />
      <Route
        path="/todos"
        exact
        render={() => (
          <PlatformReactTodoFeatureList apiUrl={environment.TODO_API_URL}></PlatformReactTodoFeatureList>
        )}
      />
      <Route
        path="/meteo"
        exact
        render={() => (
          <PlatformReactMeteoFeatureCurrentWeather 
              imgUrl={environment.WEATHER_IMG_URL}
              apiUrl={environment.WEATHER_API_URL} 
              apiKey={environment.WEATHER_API_KEY}></PlatformReactMeteoFeatureCurrentWeather>
        )}
      />
    </div>
  );
}

export default App;
