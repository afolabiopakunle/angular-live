import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('Product has been shared!')
  }

  notifyClicked() {
    window.alert('You\'ll be notified!');
  }
}