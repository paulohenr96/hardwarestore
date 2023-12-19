import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'product/:category', component: ProductpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
