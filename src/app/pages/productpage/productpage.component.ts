import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent {
  category: string = '';
  products: Product[] = [];
  title: string = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private service: ProductServiceService
  ) {
    activatedRouter.params.subscribe((cat) => {
      this.category = cat['category'];
      this.products = this.service.getProducts(this.category);
      this.title = this.category.toUpperCase();
    });
  }
}
