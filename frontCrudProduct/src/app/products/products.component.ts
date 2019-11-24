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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts(getProductsUrl).subscribe(products => {
      this.products = products;
    });
  }
}
