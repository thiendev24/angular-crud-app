import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {productState} from "./store";
import {AProductService} from "./service/product-service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products$ = this._store.select(productState);

  constructor(private _productService: AProductService, private _store: Store) {}

  ngOnInit(): void {
  }
}
