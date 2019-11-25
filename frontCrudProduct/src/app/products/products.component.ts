import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

const getProductsUrl = "http://localhost:8082/products";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: any = [];
  breakpoint = 3;
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
    this.productsService.getProducts(getProductsUrl).subscribe(products => {
      this.products = products;
    });
  }
}
