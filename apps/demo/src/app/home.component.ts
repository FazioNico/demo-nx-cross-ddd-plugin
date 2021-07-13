import { Component } from '@angular/core';

@Component({
  selector: 'demo-nx-cross-ddd-plugin-home',
  template: `
    <h1>{{title}}</h1>
    <p>{{desc}}</p>
    <ul>
      <li>
        <a href="#" routerLink="todos">Load Feature Todo</a>
      </li>
      <li>
        <a href="#" routerLink="meteo">Load Feature Meteo</a>
      </li>
    </ul>

    <p>{{descElement}}</p> 
    <ul>
      <li><a href="#" routerLink="widgets">Widgets WebComponent</a></li>
    </ul>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background-color: #143157;
      color: #fff;
    }
    :host a {
      color: #fff;
    }
  `],
})
export class HomeComponent {
  title = 'Exemple Nx Cross DDD Plugin';
  desc =  'Use librairy platform as features with Angular Lazy Loading routing'
  descElement =  'Use librairy platform as Web Component with Angular Element'
}
