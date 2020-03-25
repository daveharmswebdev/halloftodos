import { createAction } from '@ngrx/store';

export const loadHeroes = createAction('[Heroes Page] Load');

export type HeroesPageActionsUnion = ReturnType<typeof loadHeroes>;
