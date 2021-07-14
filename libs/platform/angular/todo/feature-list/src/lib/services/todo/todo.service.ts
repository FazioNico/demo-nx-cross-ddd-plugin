
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TodoDataService } from '@demo-nx-cross-ddd-plugin/todo-domain';
import { TODO_API_URL } from '@demo-nx-cross-ddd-plugin/platform-angular-shared-feature-tokens';

@Injectable()
export class TodoService extends TodoDataService {

  constructor(
    protected _http: HttpClient,
    @Inject(TODO_API_URL) protected readonly _apiUrl: string
  ) {
    super(_http, _apiUrl);
  }
}