import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views";
import { ProductsComponent } from "./views";
import { CreateProductComponent } from './components/product/create-product/create-product.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/create",
    component: CreateProductComponent
  },
  {
    path: "products/update/:id",
    component: UpdateProductComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
