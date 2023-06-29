import { Observable } from 'rxjs';
import { Book } from '../models';

export abstract class ABookService {
  abstract createBook(book: Book): Observable<Book>;
  abstract getAllBooks(): Observable<Book[]>;
}
