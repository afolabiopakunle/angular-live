import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products';

@Injectable()
export class CartService {

  items: IProduct[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<{type: string, price: number}[]> {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }

}