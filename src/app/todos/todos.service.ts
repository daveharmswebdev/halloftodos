import { Injectable } from '@angular/core';
import { ITodo } from './models/Todo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodosService {
  private baseUrl: 'http://localhost:3000/todos';

  constructor(
    private http: HttpClient
  ) {}

  getTodos() {
    return this.http.get<ITodo[]>(this.baseUrl);
  }
}
