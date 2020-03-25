import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesService } from './heroes.service';
import { StoreModule } from '@ngrx/store';

import * as fromHeroes from './store/reducers';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromHeroes.heroesFeatureKey, fromHeroes.reducers)
  ],
  providers: [HeroesService]
})
export class HeroesModule { }
