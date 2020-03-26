import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { TodosComponent } from './todos/todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects/todos.effects';
import { TodosService } from './todos.service';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
  declarations: [TodosComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    MaterialModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  providers: [TodosService]
})
export class TodosModule { }
