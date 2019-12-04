import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-create-product-file-upload",
  templateUrl: "./create-product-file-upload.component.html",
  styleUrls: ["./create-product-file-upload.component.css"]
})
export class CreateProductFileUploadComponent implements OnInit {
  failed = false;
  isLoading = false;

  @ViewChild("inputImage", { static: false }) inputImage;

  createProductForm = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required],
    image: [null]
  });

  imageDataUrl: any = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onUploadImageButtonClick() {
    this.inputImage.nativeElement.click();
  }

  onFileChange() {
    const target = this.inputImage.nativeElement;
    if (target.files && target.files.length) {
      const [file] = target.files;
      this.createProductForm.patchValue({
        image: file
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = _event => {
        this.imageDataUrl = reader.result;
      };
    }
  }

  onSubmit = () => {
    console.log(this.createProductForm);
    if (this.createProductForm.valid) {
      this.isLoading = true;
      this.failed = false;

      const formdata: FormData = new FormData();

      formdata.append("name", this.createProductForm.value.name);
      formdata.append("description", this.createProductForm.value.description);
      formdata.append("price", this.createProductForm.value.price);
      formdata.append("image", this.createProductForm.value.image);

      this.productService.createProductWithFileUpload(formdata).subscribe(
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
