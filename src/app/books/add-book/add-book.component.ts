import { Component } from '@angular/core';
import { Book } from '../models';
import { Store, select } from '@ngrx/store';
import { AppState, selectAppState, setApiStatus } from 'src/app/share/store';
import { Router } from '@angular/router';
import { invokeSaveNewBookApi } from '../store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  bookForm: Book = {
    id: 0,
    title: '',
    author: '',
    cost: 0,
  };

  constructor(
    private store: Store,
    private appStore: Store<AppState>,
    private router: Router
  ) {}

  save() {
    this.store.dispatch(invokeSaveNewBookApi({ book: this.bookForm }));
    const apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((appState) => {
      if (appState.apiStatus === 'success') {
        this.appStore.dispatch(
          setApiStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/books']);
      }
    });
  }
}
