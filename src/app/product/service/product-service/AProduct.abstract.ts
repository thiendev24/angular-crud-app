import { Observable } from 'rxjs';
import { Product } from '../../model';

export abstract class AProductService {
  abstract getAllProducts(): Observable<Product[]>;
}
