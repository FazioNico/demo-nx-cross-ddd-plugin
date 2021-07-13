import { meteoFeatureCurrentWeather } from './meteo-feature-current-weather';

describe('meteoFeatureCurrentWeather', () => {
  it('should work', () => {
    expect(meteoFeatureCurrentWeather()).toEqual(
      'meteo-feature-current-weather'
    );
  });
});
