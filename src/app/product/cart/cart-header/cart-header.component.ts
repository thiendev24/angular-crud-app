import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from '../../cart-store';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent {
  countProduct$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.countProduct$ = this.store.select(selectCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }
}
