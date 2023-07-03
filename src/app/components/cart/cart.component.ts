import { Component } from '@angular/core';
import { MyItem } from 'src/app/models/myitem';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  total: number = 0;
  items: MyItem[] = [];
  constructor(private service: ProductServiceService) {}

  ngOnInit() {
    this.total = this.service.getTotal();
    this.items = this.service.getAllItems();
  }

  remove(item: MyItem) {
    this.service.remove(item);
    this.items = this.service.getAllItems();
    this.total = this.service.getTotal();
  }

  clear() {
    this.service.clear();

    this.items = this.service.getAllItems();
    this.total = this.service.getTotal();
  }
  checkout() {
    alert('Your product is on its way.');
    this.clear();
  }
}
