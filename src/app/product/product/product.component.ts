import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { AProductService } from '../service/product-service';
import { Store } from '@ngrx/store';
import { addProduct } from '../cart-store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: AProductService, private store: Store) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => (this.products = res ? res : []),
      error: (error) => console.log(error),
    });
  }

  buy(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
