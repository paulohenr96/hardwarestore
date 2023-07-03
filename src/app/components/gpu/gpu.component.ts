import { Component } from '@angular/core';
import { MyItem } from 'src/app/models/myitem';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css'],
})
export class GpuComponent {
  products: Product[] = [];
  total?: String;
  constructor(private service: ProductServiceService) {}

  ngOnInit() {
    this.products = this.service.getGpu();
  }

  purchase(p: Product) {
    const element = document.getElementById(
      'quantity_' + p.id
    ) as HTMLInputElement;

    if (element) {
      var value = element.value;
      console.log(value);

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
