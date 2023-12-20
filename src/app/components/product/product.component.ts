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
  show: boolean = false;
  constructor(private service: ProductServiceService) {}

  purchase(p: Product) {
    this.service.addCart(p, 1);
    this.quantity = 0;
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1000);
  }
}
