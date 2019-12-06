import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoMaterialModule } from "./material.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./products/product/product.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateProductFileUploadComponent } from "./create-product-file-upload/create-product-file-upload.component";
import { DetailComponent } from "./detail/detail.component";
import { UpdateDetailsComponent } from "./detail/update-details/update-details.component";
import { UpdateImageComponent } from "./detail/update-image/update-image.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    HomeComponent,
    CreateProductFileUploadComponent,
    DetailComponent,
    UpdateDetailsComponent,
    UpdateImageComponent
  ],
  entryComponents: [UpdateDetailsComponent, UpdateImageComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
