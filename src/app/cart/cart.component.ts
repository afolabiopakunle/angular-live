import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) { }
  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  })
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}