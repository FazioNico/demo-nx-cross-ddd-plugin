import { Component, Input, OnInit } from '@angular/core';
import { TodoFeatureList } from '@demo-nx-cross-ddd-plugin/todo-feature-list';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'demo-nx-cross-ddd-plugin-todo-web-list-ui',
  template: `
    <ul *ngIf="todos; else loading">
        <li *ngFor="let todo of todos">
          <input type="checkbox" />
          {{todo.title}}
        </li>
    </ul>
    <ng-template #loading>
      <small>
        <i>loading ...</i>
      </small>
    </ng-template>
  `,
  styles: [`
    :host ul {
      margin: 0;
      padding: 0;
    }
    :host ul li {
      display: block;
    }
  `]
})
export class TodoListUiComponent extends TodoFeatureList implements OnInit {

  // create component property to be used to load todo data with max limit
  @Input() maxLimit: number|undefined;

  constructor(
    protected _service: TodoService
  ) {
    super(_service);
  }

  ngOnInit() {
    this.loadTodo();    
  }
}