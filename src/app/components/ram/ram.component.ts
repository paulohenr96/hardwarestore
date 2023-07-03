import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MyItem } from 'src/app/models/myitem';

import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css'],
})
export class RamComponent {
  products: Product[] = [];
  total: String = '';
  constructor(private service: ProductServiceService) {}

  ngOnInit() {
    this.products = this.service.getRAM();
  }

  purchase(p: Product) {
    const element = document.getElementById(
      'quantity_' + p.id
    ) as HTMLInputElement;
    if (element) {
      var value = element.value;
      console.log(value);

      var total = p.price * parseInt(value, 10);
      this.total = 'Item added to you cart : ' + value + 'x ' + p.name;

      var myitem = new MyItem();
      myitem.id = p.id;
      myitem.name = p.name;
      myitem.quantity = parseInt(value, 10);
      myitem.price = p.price;
      this.service.addCart(myitem);
    }
  }
}
