import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../core/services/productService/product.service'
import { IProduct } from 'src/app/shared/interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(d => {
      this.product= d
    })
  }

}
