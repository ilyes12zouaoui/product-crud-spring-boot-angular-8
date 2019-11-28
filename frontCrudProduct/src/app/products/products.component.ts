import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: any = [];
  breakpoint = 3;
  isLoading = true;
  failed = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    // this.products = [
    //   { name: "nnn", description: "descrip", price: 12 },
    //   { name: "nn2", description: "descrip", price: 12 },
    //   { name: "nn3", description: "descrip", price: 12 }
    // ];
    this.breakpoint =
      window.innerWidth <= 700 ? (window.innerWidth <= 500 ? 1 : 2) : 3;
  }

  onResize(event) {
    this.breakpoint =
      window.innerWidth <= 700 ? (window.innerWidth <= 500 ? 1 : 2) : 3;
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      products => {
        this.products = products;
        this.failed = false;
        this.isLoading = false;
      },
      err => {
        this.failed = true;
        this.isLoading = false;
      }
    );
  }
}
