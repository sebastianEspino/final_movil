import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://10.171.68.25:8000/api/1.0/token-auth/';
  constructor(private http: HttpClient) {}

  login(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }
  

}

