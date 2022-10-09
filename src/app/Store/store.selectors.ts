import { store } from './store.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const SelectDataFeature = createFeatureSelector<store>('store');

export const SelectData = createSelector(SelectDataFeature,(stanje)=> stanje.data);

export const SelectedData = createSelector(SelectDataFeature,(stanje)=> stanje.selectedData);

export const SelectedGroups = createSelector(SelectDataFeature,(stanje)=> stanje.selectedGroups);

export const SelectedX = createSelector(SelectDataFeature,(stanje)=> stanje.selectedX);

export const SelectedY = createSelector(SelectDataFeature,(stanje)=> stanje.selectedY);
