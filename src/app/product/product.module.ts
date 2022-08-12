import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductHomeComponent } from './product-home/product-home.component';

@NgModule({
  declarations: [ProductDetailsComponent,
    ProductsComponent, 
    ProductHomeComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductHomeComponent]
})
export class ProductModule { }
