import { Component, OnInit } from '@angular/core';
import { Book } from './models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { invokeBooksApi, selectBook } from './store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private store: Store) {}

  books$: Observable<Book[]> = this.store.pipe(select(selectBook));

  ngOnInit(): void {
    this.store.dispatch(invokeBooksApi());
  }
}
