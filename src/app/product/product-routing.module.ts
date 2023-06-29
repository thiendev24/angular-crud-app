import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'cart-detail', component: CartDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
