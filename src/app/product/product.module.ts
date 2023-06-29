import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { AProductService, ProductService } from './service/product-service';
import { CartHeaderComponent } from './cart/cart-header/cart-header.component';

@NgModule({
  declarations: [ProductComponent, CartComponent, CartDetailComponent, CartHeaderComponent],
  imports: [CommonModule, ProductRoutingModule],
  providers: [{ provide: AProductService, useClass: ProductService }],
})
export class ProductModule {}
