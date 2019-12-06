import { Component, OnInit } from "@angular/core";

import { ProductsService } from "../products.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  product: any;

  isLoading = true;
  failed = false;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.productsService
      .getProductById(this.route.snapshot.params.id)
      .subscribe(
        product => {
          this.product = product;
          this.product.image = `http://localhost:8082/images/products/${this
            .product && this.product.image}`;

          this.failed = false;
          this.isLoading = false;
        },
        err => {
          this.failed = true;
          this.isLoading = false;
        }
      );
  }
  onError() {
    this.product.image = "/assets/images/product.jpg";
  }

  onDelete = () => {
    this.productsService.deleteProduct(this.route.snapshot.params.id).subscribe(
      product => {
        this.failed = false;
        this.isLoading = false;
        this.router.navigate(["/products"]);
      },
      err => {
        this.failed = true;
        this.isLoading = false;
      }
    );
  };
}
