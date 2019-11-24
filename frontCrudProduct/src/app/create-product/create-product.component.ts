import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";

const createProductsUrl = "http://localhost:8082/products";
@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  @ViewChild("f", { static: false }) form;
  disabled = false;
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit = () => {
    console.log(this.form.valid);
    if (this.form.valid) {
      this.disabled = true;
      this.productService
        .postProduct(createProductsUrl, this.form.value)
        .subscribe(() => {
          this.router.navigate(["/products"]);
        });
    }
  };
}
