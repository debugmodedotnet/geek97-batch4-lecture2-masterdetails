import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IProductDetail } from 'src/app/entities/product-detail.entity';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges{

  @Output() iscloseDetailScreenEvent = new EventEmitter<boolean>();
  @Input() productDetail? : IProductDetail; 
  @Output() isabc = new EventEmitter<any>();
  closeDetailScreen(){
     this.iscloseDetailScreenEvent.emit(false); 
     this.isabc.emit(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productDetail);
  }

}
