import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { HomeComponent } from "./home/home.component";
import { CreateProductFileUploadComponent } from "./create-product-file-upload/create-product-file-upload.component";

const routes: Routes = [
  { path: "products/create", component: CreateProductFileUploadComponent },
  { path: "products", component: ProductsComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
