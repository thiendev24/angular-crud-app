import { createAction, props } from '@ngrx/store';
import { Book } from '../models';

export const invokeSaveNewBookApi = createAction(
  '[Books API] invoke save new book API',
  props<{ book: Book }>()
);

export const saveNewBookApiSuccess = createAction(
  '[Books API] save new book API success',
  props<{ book: Book }>()
);

export const invokeBooksApi = createAction(
  '[Books API] Invoke Books Fetch API'
);

export const booksFetchApiSuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ allBooks: Book[] }>()
);
