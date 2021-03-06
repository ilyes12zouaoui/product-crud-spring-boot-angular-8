import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const productsUrls = {
  get: "http://localhost:8082/products",
  post: "http://localhost:8082/products",
  getById: id => `http://localhost:8082/products/${id}`,
  putDetailsById: id => `http://localhost:8082/products/${id}/details`,
  putImageById: id => `http://localhost:8082/products/${id}/image`
};

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get(productsUrls.get, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProductById(id) {
    return this.http
      .get(productsUrls.getById(id), httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  postProduct(body: any) {
    return this.http
      .post(productsUrls.post, body, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  putProductDetails(body: any, id) {
    return this.http
      .put(productsUrls.putDetailsById(id), body, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduct(id) {
    return this.http
      .delete(productsUrls.getById(id), httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createProductWithFileUpload(formdata: any) {
    return this.http
      .post(productsUrls.post, formdata)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
