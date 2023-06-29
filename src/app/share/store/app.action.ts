import { createAction, props } from '@ngrx/store';
import { AppState } from './appState.interface';

export const setApiStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);
