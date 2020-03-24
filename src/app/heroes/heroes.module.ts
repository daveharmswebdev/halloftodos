import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HeroesModule { }
