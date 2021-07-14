import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { TodoListUiComponent } from "./components/todo-list-ui/todo-list-ui.component";
import { PlatformAngularTodoFeatureListBaseModule } from "./platform-angular-todo-feature-list.base";

@NgModule({
  imports: [
    // only import base module without router implementation
    PlatformAngularTodoFeatureListBaseModule
  ]
})
export class PlatformAngularTodoFeatureListElementModule implements DoBootstrap {
  // Angular Class Module with Web Component implemenation and Base Module imperted
  // Use this Module to use library as Web Component on your Applcation

  constructor(private injector: Injector) {
    const customAppElement = createCustomElement(TodoListUiComponent, {
      injector: this.injector
    });
    customElements.define('cross-ddd-todo-list', customAppElement);
  }

  ngDoBootstrap() {
    console.log('cross-ddd-todo-list init()');
  }
}
