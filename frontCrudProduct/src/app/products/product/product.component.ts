import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  constructor() {}

  ngOnInit() {
    this.product.image = `http://localhost:8082/images/products/${this.product.image}`;
  }

  onError() {
    this.product.image = "/assets/images/product.jpg";
  }
}
