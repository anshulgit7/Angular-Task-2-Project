import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CProducts } from '../CProducts';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.productsService.getProducts().subscribe(
      (res => {
        this.products = res;
        console.log(this.products);
      })
    )
  }
}