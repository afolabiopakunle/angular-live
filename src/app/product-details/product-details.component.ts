import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { IProduct, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;

  constructor(private route: ActivatedRoute, 
              private cartService: CartService) { }

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    console.log(productId);
    this.product = products.find(product => product.id === productId)
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart!');
  }

}