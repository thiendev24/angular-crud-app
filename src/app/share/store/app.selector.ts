import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './appState.interface';

export const selectAppState = createFeatureSelector<AppState>('appState');
