import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { CProducts } from './CProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = [];
  baseUrl = './assets';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any>{
    return this.http.get(`./assets/pdata.json`).pipe(
      map((res) =>{
        this.products = res;
        return this.products;
      }),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError("Error");
  }
}
