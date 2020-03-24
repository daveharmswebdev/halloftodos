import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TodosModule { }
