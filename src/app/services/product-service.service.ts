import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MyItem } from 'src/app/models/myitem';
import { Constants } from '../constants';

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

  addCart(myitem: MyItem) {
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
    var products = [];

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard.jpg';
    product.name = 'MotherBoard 1';
    product.price = 999.5;
    product.id = 19;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard2.jpg';
    product.name = 'MotherBoard 2';
    product.price = 700.5;
    product.id = 20;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard3.jpg';
    product.name = 'MotherBoard 3';
    product.price = 455.5;
    product.id = 21;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard2.jpg';
    product.name = 'MotherBoard 4';
    product.price = 200.5;
    product.id = 22;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard3.jpg';
    product.name = 'MotherBoard 5';
    product.price = 343.5;
    product.id = 23;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard2.jpg';
    product.name = 'MotherBoard 6';
    product.price = 599.5;
    product.id = 24;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard.jpg';
    product.name = 'MotherBoard 7';
    product.price = 400.5;
    product.id = 25;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard3.jpg';
    product.name = 'MotherBoard 8';
    product.price = 600.5;
    product.id = 26;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/motherboard.jpg';
    product.name = 'MotherBoard  9';
    product.price = 500.5;
    product.id = 27;
    products.push(product);

    return products;
  }
  getGpu(): any {
    var products = [];

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu.jpg';
    product.name = 'Graphic Card 1';
    product.price = 999.5;
    product.id = 1;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu2.jpg';
    product.name = 'Graphic Card 2';
    product.price = 999.5;
    product.id = 2;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu3.jpg';
    product.name = 'Graphic Card 3';
    product.price = 999.5;
    product.id = 3;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu2.jpg';
    product.name = 'Graphic Card 4';
    product.price = 999.5;
    product.id = 4;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu3.jpg';
    product.name = 'Graphic Card 5';
    product.price = 999.5;
    product.id = 5;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu2.jpg';
    product.name = 'Graphic Card 6';
    product.price = 999.5;
    product.id = 6;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu.jpg';
    product.name = 'Graphic Card 7';
    product.price = 999.5;
    product.id = 7;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu3.jpg';
    product.name = 'Graphic Card 8';
    product.price = 999.5;
    product.id = 8;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/gpu.jpg';
    product.name = 'Graphic Card 9';
    product.price = 999.5;
    product.id = 9;
    products.push(product);

    return products;
  }

  getRAM(): any {
    var products = [];

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram.jpg';
    product.name = 'Memory 1';
    product.price = 999.5;
    product.id = 10;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/ram2.jpg';
    product.name = 'Memory 2';
    product.price = 999.5;
    product.id = 11;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/ram3.jpg';
    product.name = 'Memory 3';
    product.price = 999.5;
    product.id = 12;

    products.push(product);
    var product = new Product();
    product.img = Constants.url + 'assets/img/ram2.jpg';
    product.name = 'Memory 4';
    product.price = 999.5;
    product.id = 13;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram3.jpg';
    product.name = 'Memory 5';
    product.price = 999.5;
    product.id = 14;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram2.jpg';
    product.name = 'Memory 6';
    product.price = 999.5;
    product.id = 15;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram.jpg';
    product.name = 'Memory 7';
    product.price = 999.5;
    product.id = 16;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram3.jpg';
    product.name = 'Memory 8';
    product.price = 999.5;
    product.id = 17;
    products.push(product);

    var product = new Product();
    product.img = Constants.url + 'assets/img/ram.jpg';
    product.name = 'Memory 9';
    product.price = 999.5;
    product.id = 18;
    products.push(product);

    return products;
  }
}
