import { Component, Input } from '@angular/core';
import { MyItem } from 'src/app/models/myitem';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: Product = new Product();
  total: string = '';
  quantity: number = 0;
  constructor(private service: ProductServiceService) {}

  purchase(p: Product) {
    if (this.quantity <= 0) return;

    var myitem = new MyItem();
    myitem.id = p.id;
    myitem.name = p.name;
    myitem.quantity = this.quantity;
    myitem.price = p.price;
    this.service.addCart(myitem);
    this.quantity = 0;
  }
}
