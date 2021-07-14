import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MeteoCurrentWeatherUiComponent } from "./components/meteo-current-weather-ui/meteo-current-weather-ui.component";
import { MeteoFeatureCurrentWeatherBaseModule } from "./platform-angular-meteo-feature-current-weather.base";

@NgModule({
  imports: [
    // only import base module without router implementation
    MeteoFeatureCurrentWeatherBaseModule
  ]
})
export class PlatformAngularMeteoFeatureCurrentWeatherElementModule implements DoBootstrap {
  // Angular Class Module with Web Component implemenation and Base Module imperted
  // Use this Module to use library as Web Component on your Applcation

  constructor(private injector: Injector) {
    const customAppElement = createCustomElement(MeteoCurrentWeatherUiComponent, {
      injector: this.injector
    });
    customElements.define('cross-ddd-current-meteo', customAppElement);
  }

  ngDoBootstrap() {
    console.log('cross-ddd-current-meteo init()');
  }
}
