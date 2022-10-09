import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { storeEffects } from './store.effects';
import { storeReducer } from './store.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('store', storeReducer),
    EffectsModule.forFeature([storeEffects])
  ],
  providers: [],
})
export class FormsStoreModule {}
