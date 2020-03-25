import { Component, OnInit } from '@angular/core';
import { ITodosState } from '../store/reducers/todos.reducer';
import { Store, select } from '@ngrx/store';
import { FetchTodos } from '../store/actions/todos.actions';
import { Observable } from 'rxjs';
import { ITodo } from '../models/Todo';
import { selectTodosAll } from '../store/selectors/todos.selector';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos$: Observable<ITodo[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(selectTodosAll));

    this.store.dispatch(new FetchTodos());
  }

}
