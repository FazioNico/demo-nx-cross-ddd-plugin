import { TodoDataService } from "@demo-nx-cross-ddd-plugin/todo-domain";
import { fromFetch} from "rxjs/fetch";

export const todoService = (apiUrl: string) => {
  const httpClient = {
    get: <T>(url: string) => fromFetch<T>(url, {selector: (res)=> res.json()}),
    post: <T>(url: string, body: any) => fromFetch<T>(url, {body, method: 'POST', selector: (res)=> res.json()}),
    put: <T>(url: string, body: any) => fromFetch<T>(url, {body, method: 'PUT', selector: (res)=> res.json()}),
  }
  return new TodoDataService(httpClient, apiUrl);
}