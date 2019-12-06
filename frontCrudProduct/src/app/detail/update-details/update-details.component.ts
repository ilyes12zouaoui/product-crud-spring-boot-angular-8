import { Component, OnInit, Inject } from "@angular/core";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ProductsService } from "src/app/products.service";

@Component({
  selector: "app-update-details",
  templateUrl: "./update-details.component.html",
  styleUrls: ["./update-details.component.css"]
})
export class UpdateDetailsComponent implements OnInit {
  failed = false;
  isLoading = false;

  createProductForm = this.fb.group({
    name: [this.data.name, Validators.required],
    description: [this.data.description, Validators.required],
    price: [this.data.price, Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    public dialogRef: MatDialogRef<UpdateDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onSubmit = () => {
    console.log(this.createProductForm);
    if (this.createProductForm.valid) {
      this.isLoading = true;
      this.failed = false;
      this.productService
        .putProductDetails(this.createProductForm.value, this.data.id)
        .subscribe(
          () => {
            this.router.navigate(["/products"]);
            this.isLoading = false;
            this.dialogRef.close();
          },
          err => {
            this.isLoading = false;
            this.failed = true;
          }
        );
    }
  };
  onCancel(): void {
    this.dialogRef.close();
  }
}
