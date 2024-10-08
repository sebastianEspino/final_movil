import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://10.171.68.25:8000/api/1.0';

  constructor(private http: HttpClient) { }


  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Usuarios/${id}/`);
  }

}