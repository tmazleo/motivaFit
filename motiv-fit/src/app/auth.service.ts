// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials, { responseType: 'text' }).pipe(
      tap(response => console.log(response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error(error);
    return throwError('Erro ao realizar a operação. Por favor, tente novamente.');
  }
}
