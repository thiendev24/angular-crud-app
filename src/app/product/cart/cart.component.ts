import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGroup } from '../model';
import { Store } from '@ngrx/store';
import {
  addProduct,
  clearCart,
  removeProduct,
  selectGroupedCartEntries,
} from '../cart-store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartEntries$: Observable<ProductGroup[]>;

  constructor(private store: Store) {
    this.cartEntries$ = this.store.select(selectGroupedCartEntries);
  }

  clearEntries() {
    this.store.dispatch(clearCart());
  }

  more(entry: ProductGroup) {
    this.store.dispatch(addProduct(entry.product));
  }

  less(entry: ProductGroup) {
    this.store.dispatch(removeProduct(entry.product));
  }
}
