import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import {
  TodosAction,
  FetchTodos,
  TodosActionTypes,
  FetchTodosSuccess,
  FetchTodosFailure,
} from '../actions/todos.actions';
import { TodosService } from '../../todos.service';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions<TodosAction>,
    private todosService: TodosService
  ) {}

  @Effect()
  fetchTodos$: Observable<Action> = this.actions$.pipe(
    ofType<FetchTodos>(TodosActionTypes.FetchTodos),
    switchMap(() => {
      return this.todosService.getTodos().pipe(
        map(todos => new FetchTodosSuccess({ todos })),
        catchError(error => of(new FetchTodosFailure({ error })))
      );
    })
  );
}
