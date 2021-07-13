import { Component } from '@angular/core';

@Component({
  selector: 'demo-nx-cross-ddd-plugin-widget',
  template: `
    <div id="header">
      <h1>{{title}}</h1>
      <p [innerHTML]="desc"></p>
    </div>
    <div id="widgetsWrapper">
      <div class="widget">
        <h2>Todos Widget</h2>
        <cross-ddd-todo-list [maxLimit]="todosMaxLimit"></cross-ddd-todo-list>
      </div>
      <div class="widget">
        <h2>Meteo Widget</h2>
        <cross-ddd-current-meteo></cross-ddd-current-meteo>
      </div>
    </div>
  `,
  styles: [`
    :host {
      background-color: #143157;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 100%;
      height: 100%;
    }
    :host #header {
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
    }
    :host #widgetsWrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: center;
    }
    :host .widget h2 {
      color: #143157;
    }
    :host .widget {
      background-color: #fff;
      color: #1a1a1a;
      border: solid 1px #ccc;
      min-height: 200px;
      margin: 1rem;
      padding: 1rem;
    }
    :host cross-ddd-todo-list,
    :host cross-ddd-current-meteo {
      display: block;
    }
  `],
})
export class WidgetsComponent {
  title = 'Exemple Nx Cross DDD Plugin';
  desc = 'Use librairy platform as <b>Web Component</b> with Angular Element';
  todosMaxLimit = 10;
}
