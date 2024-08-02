import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://repwheels.pythonanywhere.com/api/1.0/token-auth/';
  constructor(private http: HttpClient) {}

  login(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }
  

}

