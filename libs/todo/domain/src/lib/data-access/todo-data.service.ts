import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

interface IHttpService {
  get: <T>(params: string) => Observable<T>;
  post: <T>(params: string, body: any) => Observable<T>;
  put: <T>(params: string, body: any) => Observable<T>;
}

const API_PATH = '/todos';

export class TodoDataService {
  constructor(
    protected _http: IHttpService,
    protected _apiUrl: string
  ) { }

  async loadTodo<T>() {
    return await this._http
      .get<T>(this._apiUrl + API_PATH)
      .pipe(first())
      .toPromise();
  }
}