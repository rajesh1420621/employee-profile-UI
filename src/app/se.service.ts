import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EmployeeProfile } from './employee-profile';


@Injectable({
  providedIn: 'root'
})
export class SeService {

  constructor(private http: HttpClient) { }

  RegisterEmployee(employee: EmployeeProfile): Observable<any> {
    let url: string = 'http://localhost:8080/addemployeeprofile';
    return this.http.post<any>(url,
      JSON.stringify(employee), { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .pipe(catchError(this.handleError));
  }

  getAllEmplooyeeDetails(): Observable<any> {
    let url: string = 'http://localhost:8080/getallemployees';
    return this.http.get<any>(url,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}