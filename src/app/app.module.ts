import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: ProductListComponent}
  ]) ],
  declarations: [ AppComponent, ProductListComponent, TopBarComponent, ProductAlertsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
