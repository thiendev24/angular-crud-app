import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AProductService, ProductService } from './service/product-service';
import {ProductComponent} from "./product.component";
import {StoreModule} from "@ngrx/store";
import {productReducer} from "./store";

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature('productStore', productReducer)
  ],
  providers: [{ provide: AProductService, useClass: ProductService }],
})
export class ProductModule {}
