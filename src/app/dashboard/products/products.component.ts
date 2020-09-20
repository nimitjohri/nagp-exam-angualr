import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../core/services/productService/product.service'
import { IProduct } from 'src/app/shared/interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[]
  constructor(private productService: ProductService) { }
  ngOnInit(): void {

    this.productService.getProducts().subscribe(data => {
      this.products=data
    })
  }

}
