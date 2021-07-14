import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListUiComponent } from './components/todo-list-ui/todo-list-ui.component';
import { PlatformAngularTodoFeatureListBaseModule } from './platform-angular-todo-feature-list.base';

@NgModule({
  imports: [
    // Base ui module
    PlatformAngularTodoFeatureListBaseModule,
    // Angular Router implementation
    RouterModule.forChild([
      {
        path: '',
        component: TodoListUiComponent
      }
    ])
  ]
})
export class PlatformAngularTodoFeatureListModule {
  // Angular Class Module with router implemenation and Base Module imperted
  // Use this Module to LazyLoad Feature into your Angular App
};
