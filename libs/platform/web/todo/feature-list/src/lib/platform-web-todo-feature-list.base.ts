import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListUiComponent } from './components/todo-list-ui/todo-list-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo/todo.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    TodoListUiComponent
  ],
  providers: [
    TodoService
  ],
  exports: [
    CommonModule
  ]
})
export class PlatformWebTodoFeatureListBaseModule {
  // Angular Class Module without any router implemenation
  // You have to create Module with router implementation OR|AND Web Component implementation
  // to use this Feature UI Module.
};
