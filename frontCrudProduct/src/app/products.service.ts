import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(url: string) {
    return this.http.get(url, httpOptions);
  }

  postProduct(url: string, body: any) {
    return this.http.post(url, body, httpOptions);
  }
}
