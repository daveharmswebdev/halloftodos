import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  FetchTodos,
  DeleteTodo,
  UpdateTodo,
} from '../store/actions/todos.actions';
import { Observable } from 'rxjs';
import { ITodo } from '../models/Todo';
import { selectTodosAll } from '../store/selectors/todos.selector';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectTodosAll));

    this.store.dispatch(new FetchTodos());
  }

  deleteTodo({ id }) {
    console.log('deleting id', id);
    this.store.dispatch(new DeleteTodo({ id }));
  }

  completeTodo(completedTodo: ITodo) {
    const todo: ITodo = !completedTodo.complete
      ? {
          ...completedTodo,
          complete: true,
          completeDate: new Date(),
        }
      : {
          ...completedTodo,
          complete: false,
          completeDate: null,
        };
    this.store.dispatch(new UpdateTodo({ todo }));
  }
}
