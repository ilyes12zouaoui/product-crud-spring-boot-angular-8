import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  failed = false;
  isLoading = false;

  createProductForm: FormGroup;

  constructor(private productService: ProductsService, private router: Router) {
    this.createProductForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit = () => {
    console.log(this.createProductForm);
    if (this.createProductForm.valid) {
      this.isLoading = true;
      this.failed = false;
      this.productService.postProduct(this.createProductForm.value).subscribe(
        () => {
          this.router.navigate(["/products"]);
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
          this.failed = true;
        }
      );
    }
  };
}
