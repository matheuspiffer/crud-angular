import { Product } from "./../product.model";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-delete-product",
  templateUrl: "./delete-product.component.html",
  styleUrls: ["./delete-product.component.css"],
})
export class DeleteProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe(product =>{
      this.product = product
    });
  }

  deleteProduct(): void {
     this.productService.deleteById(this.product.id).subscribe(()=>{
       this.productService.showMessage('Produto excluído com sucesso')
       this.router.navigate(['/products'])
    })
  }

  cancel():void {
    this.router.navigate(['/products'])
  }
}
