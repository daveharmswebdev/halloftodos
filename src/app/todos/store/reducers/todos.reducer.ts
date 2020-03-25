import { ITodo } from '../../models/Todo';
import * as fromTodos from '../actions/todos.actions';

export interface ITodosState {
  loading: boolean;
  loaded: boolean;
  todos: ITodo;
  error: string;
}

export const intitialTodosState: ITodosState = {
  loading: false,
  loaded: false,
  todos: undefined,
  error: undefined,
};

export function todosReducer(
  state = intitialTodosState,
  action: fromTodos.TodosAction
): ITodosState {
  switch (action.type) {
    case fromTodos.TodosActionTypes.FetchTodos:
      return { ...state };
    case fromTodos.TodosActionTypes.FetchTodosSuccess:
      return { ...state };
    case fromTodos.TodosActionTypes.FetchTodosFailure:
      return { ...state };
    default:
      return state;
  }
}

export const getLoading = (state: ITodosState) => state.loading;
export const getLoaded = (state: ITodosState) => state.loaded;
export const getTodos = (state: ITodosState) => state.todos;
export const getError = (state: ITodosState) => state.error;
