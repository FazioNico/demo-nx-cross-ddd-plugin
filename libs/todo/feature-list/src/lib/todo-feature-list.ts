import { Todo, TodoDataService } from '@demo-nx-cross-ddd-plugin/todo-domain';

export class TodoFeatureList {

  todos: Todo[]|undefined;
  maxLimit: number|undefined;

  constructor(
    protected readonly _service: TodoDataService
  ) {
  }

  async loadTodo() {
    this.todos = await this._service
      .loadTodo<Todo[]>()
      .then((todos) => todos?.slice(0, this.maxLimit))
  }

}