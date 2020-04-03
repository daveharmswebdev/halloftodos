import { Injectable } from '@angular/core';
import { ITodo, ICreateTodo } from '../models/Todo';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { handleError } from '../../shared/helpers/HandlerError';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodosService {
  private baseUrl = 'http://localhost:56720/api/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<ITodo[]>(this.baseUrl).pipe(catchError(handleError));
  }

  updateTodo(todo: ITodo) {
    const url = this.baseUrl + '/' + todo.id;
    return this.http.put(url, todo).pipe(catchError(handleError));
  }

  deleteTodo(id: number) {
    const url = this.baseUrl + '/' + id;
    return this.http.delete(url).pipe(catchError(handleError));
  }

  createTodo(createTodo: ICreateTodo) {
    return this.http.post(this.baseUrl, createTodo).pipe(
      map((todo: ITodo) => {
        const { notes, ...rest } = todo;
        return rest;
      }),
      catchError(handleError)
    );
  }
}
