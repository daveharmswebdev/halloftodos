import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
import { IHero } from '../models/Hero';

import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { HeroesState } from '../store/reducers';
import { loadHeroes } from '../store/actions/heroes-page.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  $Heroes: Observable<IHero[]>;

  constructor(private heroesService: HeroesService, private store: Store<HeroesState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadHeroes());
    this.$Heroes = this.heroesService.getHeroes().pipe(
      tap(console.log)
    );
  }

}
