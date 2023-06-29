import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../models';

export const selectBook = createFeatureSelector<Book[]>('myBooks');
