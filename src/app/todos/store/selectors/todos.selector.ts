import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ITodosState } from '../reducers/todos.reducer';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState = createFeatureSelector<AppState, ITodosState>(
  'todos'
);

// this selector is required before we can use the
// todo entity adapter methods
export const selectTodos = createSelector(selectTodosState, fromTodos.getTodos);

export const selectTodosAll = createSelector(selectTodos, fromTodos.getTodoAll);
