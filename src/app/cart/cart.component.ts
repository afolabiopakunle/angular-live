import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { IProduct } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: IProduct[] = [];

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) { }
  checkOutForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
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