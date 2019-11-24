import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "products/create", component: CreateProductComponent },
  { path: "products", component: ProductsComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
