import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model';
import { Observable } from 'rxjs';
import { AProductService } from './AProduct.abstract';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends AProductService {
  private PRODUCT_API = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
    super();
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCT_API);
  }
}
