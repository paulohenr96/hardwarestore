import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MyItem } from 'src/app/models/myitem';
import { Constants } from '../constants';
import products from '../../assets/data/products.json';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  total: number = 0;
  myitems: MyItem[] = [];
  constructor() {}

  sum(price: number) {
    this.total += price;
  }

  addCart(p: Product, quantity: number) {
    var myitem = new MyItem();
    myitem.id = p.id;
    myitem.name = p.name;
    myitem.quantity = quantity;
    myitem.price = p.price;

    var foundItem = this.myitems.find((item) => item.id === myitem.id);

    this.sum(myitem.price!! * myitem.quantity);

    if (foundItem) {
      foundItem.quantity += myitem.quantity;
    } else {
      this.myitems.push(myitem);
    }
  }
  getAllItems(): any {
    return this.myitems;
  }
  getTotal(): number {
    return this.total;
  }

  clear() {
    this.total = 0;
    this.myitems = [];
  }
  remove(item: MyItem) {
    var foundItem = this.myitems.find((i) => i.id === item.id);

    if (foundItem) {
      if (foundItem.quantity == 1) {
        this.myitems = this.myitems.filter((i) => i.id != item.id);
      } else {
        foundItem.quantity--;
      }

      this.total -= item.price!!;
    }
  }

  getMotherBoard(): Product[] {
    return products.products.filter((e) => e.category === 'motherboard');
  }
  getGpu(): any {
    return products.products.filter((e) => e.category === 'gpu');
  }
  getProducts(category: string): Product[] {
    return products.products.filter((e) => e.category === category);
  }
  getRAM(): Product[] {
    return products.products.filter((e) => e.category === 'ram');
  }
}
