import { createReducer, on } from '@ngrx/store';
import { AppState } from './appState.interface';
import { setApiStatus } from './app.action';

export const initialAppState: Readonly<AppState> = {
  apiResponseMessage: '',
  apiStatus: '',
};

export const appReducer = createReducer(
  initialAppState,
  on(setApiStatus, (state, { apiStatus }) => {
    return { ...state, ...apiStatus };
  })
);
