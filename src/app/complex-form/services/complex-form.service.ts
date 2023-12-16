import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, mapTo, of } from 'rxjs';
import { ComplexFormValue } from '../models/complex-form-value.model';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class ComplexForm {
  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/user`, formValue).pipe(
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(delay(1000)))
    );
  }
}
