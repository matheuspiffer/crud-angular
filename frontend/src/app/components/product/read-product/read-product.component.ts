import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit {
  
  products: Product[];
  displayedColumns = ['id', 'description', 'price', 'action'];

  constructor(private productServive: ProductService) { }

  ngOnInit(): void {
    this.productServive.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}