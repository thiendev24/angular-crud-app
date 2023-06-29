import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models';
import { Observable } from 'rxjs';
import { ABookService } from './book.abstract.service';

const BOOK_API = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookService extends ABookService {
  constructor(private http: HttpClient) {
    super();
  }

  override createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(BOOK_API, book);
  }

  override getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOK_API);
  }
}
