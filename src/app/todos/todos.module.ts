import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { TodosComponent } from './todos/todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/reducers/todos.reducer';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    StoreModule.forFeature('todos', todosReducer)
  ]
})
export class TodosModule { }
