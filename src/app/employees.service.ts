import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { CEmployee } from './CEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  emp: any = [];
  baseUrl = './assets';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{

    return this.http.get(`./assets/edata.json`).pipe(
      map((res) =>{
        this.emp = res;
        return this.emp;
      }),
      catchError(this.errorHandler)
    )
  }
  
  errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError("Error");
  }
}
