import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    {path: '', component: ProductListComponent},
    {path: 'products/:productId', component: ProductDetailsComponent, pathMatch: 'full'}
  ]) ],
  declarations: [ AppComponent, ProductListComponent, TopBarComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
