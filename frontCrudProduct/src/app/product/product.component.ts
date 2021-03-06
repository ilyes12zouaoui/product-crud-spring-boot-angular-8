import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
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
          this.failed = false;
          this.isLoading = false;
        },
        err => {
          this.failed = true;
          this.isLoading = false;
        }
      );
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
