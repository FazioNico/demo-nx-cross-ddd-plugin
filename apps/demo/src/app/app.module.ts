import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TODO_API_URL, WEATHER_API_URL, WEATHER_IMG_URL, WEATHER_API_KEY } from '@demo-nx-cross-ddd-plugin/platform-web-shared-feature-tokens';
import { PlatformWebMeteoFeatureCurrentWeatherElementModule } from '@demo-nx-cross-ddd-plugin/platform/web/meteo/feature-current-weather';
import { PlatformWebTodoFeatureListElementModule } from '@demo-nx-cross-ddd-plugin/platform/web/todo/feature-list';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { WidgetsComponent } from './widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    PlatformWebMeteoFeatureCurrentWeatherElementModule,
    PlatformWebTodoFeatureListElementModule,
    RouterModule.forRoot([
      {
        path: 'todos',
        loadChildren: () => import('@demo-nx-cross-ddd-plugin/platform/web/todo/feature-list')
        .then(m => m.PlatformWebTodoFeatureListModule)
      },
      {
        path: 'meteo',
        loadChildren: () => import('@demo-nx-cross-ddd-plugin/platform/web/meteo/feature-current-weather')
        .then(m => m.PlatformWebMeteoFeatureCurrentWeatherModule)
      },
      {
        path: 'widgets',
        component: WidgetsComponent
      },
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  providers: [
    {provide: TODO_API_URL, useValue: environment.TODO_API_URL},
    {provide: WEATHER_API_URL, useValue: environment.WEATHER_API_URL},
    {provide: WEATHER_API_KEY, useValue: environment.WEATHER_API_KEY},
    {provide: WEATHER_IMG_URL, useValue: environment.WEATHER_IMG_URL},
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
