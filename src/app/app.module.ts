import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GpuComponent } from './components/gpu/gpu.component';
import { RamComponent } from './components/ram/ram.component';
import { MotherboardComponent } from './components/motherboard/motherboard.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent, GpuComponent, RamComponent, MotherboardComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
