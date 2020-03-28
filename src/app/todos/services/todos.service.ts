import { Injectable } from '@angular/core';
import { ITodo } from '../models/Todo';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { handleError } from '../../shared/helpers/HandlerError';

@Injectable()
export class TodosService {
  private baseUrl = 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) {}

  getTodos() {
    return this.http.get<ITodo[]>(this.baseUrl).pipe(
      catchError(handleError)
    );
  }

  updateTodo(todo: ITodo) {
    const url = this.baseUrl + '/' + todo.id;
    return this.http.put(url, todo).pipe(
      catchError(handleError)
    );
  }

  deleteTodos(id: number) {
    const url = this.baseUrl + '/' + id;
    return this.http.delete(url).pipe(
      catchError(handleError)
    );
  }
}
