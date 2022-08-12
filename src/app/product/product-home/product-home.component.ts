import { Component, OnInit } from '@angular/core';
import { IProductDetail } from 'src/app/entities/product-detail.entity';
import { IProduct } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  isDetailScreenVisible = false;
  products?: IProduct[];
  productDetails?: IProductDetail;
  ngOnInit() {

    this.products = this.getProducts();

  }
  closeDetailScreen(mode: boolean) {

    this.isDetailScreenVisible = mode;

  }

  exprttoExcel():void{
    console.log('excel', this.products);
  }
  showDeail(data: any) {
    this.productDetails = this.getProductDetails(data.Id);
    this.isDetailScreenVisible = data.Mode;

  }
  getProducts(): IProduct[] {
    return [
      {
        Id: "1",
        Title: "Pen",
        Price: 200,
        Quantity: 100
      },
      {
        Id: "2",
        Title: "Pencil",
        Price: 100,
        Quantity: 50
      },
      {
        Id: "3",
        Title: "Book",
        Price: 400,
        Quantity: 100
      },
      {
        Id: "4",
        Title: "Notebook",
        Price: 200,
        Quantity: 70
      },
      {
        Id: "5",
        Title: "Bat",
        Price: 200,
        Quantity: 90
      }

    ]
  }

  getProductDetails(Id: string): IProductDetail | undefined {
    const products: IProductDetail[] = [
      {
        Product: {
          Id: "1",
          Title: "Pen",
          Price: 100,
          Quantity: 100
        },
        Color: "Red",
        Distributor: " Abc"
      },
      {
        Product: {
          Id: "2",
          Title: "Pencil",
          Price: 100,
          Quantity: 100
        },
        Color: "Pink",
        Distributor: " Abc"

      },
      {
        Product: {
          Id: "3",
          Title: "Book",
          Price: 100,
          Quantity: 100
        },
        Color: "Red",
        Distributor: " tyo"
      },
      {
        Product: {
          Id: "4",
          Title: "Notebook",
          Price: 100,
          Quantity: 100
        },
        Color: "Green",
        Distributor: " xyz"
      },
      {
        Product: {
          Id: "5",
          Title: "Bat",
          Price: 100,
          Quantity: 100
        },
        Color: "Blue",
        Distributor: " Abc"
      }

    ];

    let pIndex = products.findIndex(p => p.Product.Id == Id);
    if (pIndex != -1) {
      return products[pIndex];
    }
    else {
      return undefined;
    }
  }

}
