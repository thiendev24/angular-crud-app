import { createReducer, on } from '@ngrx/store';
import { Book } from '../models';
import { booksFetchApiSuccess, saveNewBookApiSuccess } from './book.action';

const initialBookState: Book[] = [];

export const bookReducer = createReducer(
  initialBookState,
  on(booksFetchApiSuccess, (state, { allBooks }) => {
    return allBooks;
  }),
  on(saveNewBookApiSuccess, (state, { book }) => {
    const newState = [...state];
    newState.push(book);
    return newState;
  })
);
