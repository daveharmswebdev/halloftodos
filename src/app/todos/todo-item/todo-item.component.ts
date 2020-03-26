import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Output() deleteTodo: EventEmitter<{id: number}> = new EventEmitter();

  delete() {
    this.deleteTodo.emit({id: this.todo.id});
  }

}
