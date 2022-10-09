import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { StoreApiService } from './store-api.service';
import { getData, getDataSuccess, getDataFailure } from './store.actions';
import {
  catchError,
  map,
  mergeMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class storeEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getData),
      mergeMap(() =>
        this.storeApiService.getData().pipe(
          map((data) => getDataSuccess({data})),
          catchError((error) => of(getDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private storeApiService: StoreApiService
  ) {}
}
