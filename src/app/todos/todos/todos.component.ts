import { Component, OnInit } from '@angular/core';
import { ITodosState } from '../store/reducers/todos.reducer';
import { Store } from '@ngrx/store';
import { FetchTodos } from '../store/actions/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(
    private store: Store<ITodosState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchTodos());
  }

}
