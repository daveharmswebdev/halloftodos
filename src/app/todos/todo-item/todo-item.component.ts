import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Output() deleteTodo: EventEmitter<{id: string}> = new EventEmitter();
  @Output() completeTodo: EventEmitter<ITodo> = new EventEmitter();

  delete() {
    this.deleteTodo.emit({id: this.todo.id});
  }

  complete() {
    this.completeTodo.emit(this.todo);
  }

}
