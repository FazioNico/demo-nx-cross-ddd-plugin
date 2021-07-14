import { Component, Inject, OnInit } from '@angular/core';
import { MeteoFeatureCurrentWeather } from '@demo-nx-cross-ddd-plugin/meteo-feature-current-weather';
import { WEATHER_IMG_URL } from '@demo-nx-cross-ddd-plugin/platform-angular-shared-feature-tokens';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'demo-nx-cross-ddd-plugin-angular-meteo-current-weather-ui',
  template: `
    <div *ngIf="currentWeather; else loading">
      <div id="mainWrapper">
        <p>{{currentWeather?.temp}}°C</p>
        <picture>
          <img [src]="imgUrl + '/' + currentWeather?.icon + '@2x.png'" />
        </picture>
      </div>
      <p>
        {{currentWeather?.name}}
      </p>
    </div>
    <ng-template #loading>
      <small>
        <i>loading ...</i>
      </small>
    </ng-template>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    :host #mainWrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    :host #mainWrapper p {
      font-size: 3rem;
      font-weight: bold;
      margin: 0;
    } 
  `]
})
export class MeteoCurrentWeatherUiComponent extends MeteoFeatureCurrentWeather implements OnInit {

  constructor(
    protected readonly _dataService: DataService,
    @Inject(WEATHER_IMG_URL) public imgUrl: string 
  ) {
    super(_dataService);
  }

  ngOnInit() {
    this.init();
  }
}