import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  @Input() products?: IProduct[]
  @Output() showDetailsEvent = new EventEmitter<any>();
  showDetail(Id: string){
    this.showDetailsEvent.emit({
      Mode:true,
      Id : Id
    })
  }

}
