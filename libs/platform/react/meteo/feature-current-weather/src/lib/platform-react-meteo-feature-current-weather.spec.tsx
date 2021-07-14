import { render } from '@testing-library/react';

import PlatformReactMeteoFeatureCurrentWeather from './platform-react-meteo-feature-current-weather';

describe('PlatformReactMeteoFeatureCurrentWeather', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlatformReactMeteoFeatureCurrentWeather />);
    expect(baseElement).toBeTruthy();
  });
});
