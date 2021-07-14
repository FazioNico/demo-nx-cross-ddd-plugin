import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MeteoCurrentWeatherUiComponent } from './components/meteo-current-weather-ui/meteo-current-weather-ui.component';
import { MeteoFeatureCurrentWeatherBaseModule } from './platform-angular-meteo-feature-current-weather.base';

@NgModule({
  imports: [
    // Base ui module
    MeteoFeatureCurrentWeatherBaseModule,
    // Angular Router implementation
    RouterModule.forChild([
      {
        path: '',
        component: MeteoCurrentWeatherUiComponent
      }
    ])
  ],
  declarations: [
    // component ui
    MeteoCurrentWeatherUiComponent
  ]
})
export class PlatformAngularMeteoFeatureCurrentWeatherModule {
  // Angular Class Module with router implemenation and Base Module imperted
  // Use this Module to LazyLoad Feature into your Angular App
};

