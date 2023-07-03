import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpuComponent } from './components/gpu/gpu.component';
import { RamComponent } from './components/ram/ram.component';
import { CartComponent } from './components/cart/cart.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';

const routes: Routes = [
  { path: '', component: GpuComponent },

  { path: 'gpu', component: GpuComponent },
  { path: 'ram', component: RamComponent },
  { path: 'motherboard', component: MotherboardComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
