import { Injectable } from '@angular/core';
import { Action, Store, select } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  EMPTY,
  Observable,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs';

import { ABookService } from '../service/book.abstract.service';
import {
  booksFetchApiSuccess,
  invokeBooksApi,
  invokeSaveNewBookApi,
  saveNewBookApiSuccess,
} from './book.action';
import { selectBook } from './book.selector';
import { AppState, setApiStatus } from 'src/app/share/store';

@Injectable()
export class BookEffect {
  constructor(
    private actions$: Actions,
    private bookService: ABookService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewBookApi),
      switchMap((action) => {
        this.appStore.dispatch(
          setApiStatus({
            apiStatus: {
              apiResponseMessage: '',
              apiStatus: '',
            },
          })
        );
        return this.bookService.createBook(action.book).pipe(
          map((data) => {
            this.appStore.dispatch(
              setApiStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewBookApiSuccess({ book: data });
          })
        );
      })
    );
  });

  loadAllBooks$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksApi),
      withLatestFrom(this.store.pipe(select(selectBook))),
      mergeMap(([, bookFormStore]) => {
        if (bookFormStore.length > 0) {
          return EMPTY;
        }
        return this.bookService
          .getAllBooks()
          .pipe(map((data) => booksFetchApiSuccess({ allBooks: data })));
      })
    )
  );
}
