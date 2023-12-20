import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../../assets/data/products.json';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  product: Product = new Product();
  quantity: number = 0;
  constructor(
    private activeRouter: ActivatedRoute,
    private service: ProductServiceService
  ) {
    activeRouter.params.subscribe((e) => {
      const id = e['id'];
      console.log(id);
      this.product = products.products.filter((e) => e.id == id)[0];
      console.log(this.product);
    });
  }
  purchase() {
    this.service.addCart(this.product, this.quantity);
    this.quantity = 0;
  }
}
