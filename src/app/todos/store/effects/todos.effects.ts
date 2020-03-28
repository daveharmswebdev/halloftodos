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
  DeleteTodo,
  DeleteTodoSuccess,
  UpdateTodo,
  UpdateTodoSuccess,
  UpdateTodoFailure,
  CreateTodo,
  CreateTodoSuccess,
  CreateTodoFailure,
} from '../actions/todos.actions';
import { TodosService } from '../../services/todos.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { ITodo } from '../../models/Todo';

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

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateTodo>(TodosActionTypes.UpdateTodo),
    switchMap(action => {
      const update: Update<ITodo> = {
        id: action.payload.todo.id,
        changes: action.payload.todo,
      };
      return this.todosService.updateTodo(action.payload.todo).pipe(
        map(() => new UpdateTodoSuccess({ update })),
        catchError(error => of(new UpdateTodoFailure({ error })))
      );
    })
  );

  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteTodo>(TodosActionTypes.DeleteTodo),
    switchMap(({ payload: { id } }) => {
      return this.todosService.deleteTodo(id).pipe(
        map(() => new DeleteTodoSuccess({ id })),
        catchError(error => of(new FetchTodosFailure({ error })))
      );
    })
  );

  @Effect()
  createTodos$: Observable<Action> = this.actions$.pipe(
    ofType<CreateTodo>(TodosActionTypes.CreateTodo),
    switchMap(({ payload: { createTodo } }) => {
      return this.todosService.createTodo(createTodo).pipe(
        map(todo => new CreateTodoSuccess({ todo })),
        catchError(error => of(new CreateTodoFailure({ error })))
      );
    })
  );
}
