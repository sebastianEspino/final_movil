import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://10.171.68.189:8000/api/1.0/registrar_usuario';

  constructor(private http: HttpClient) { }

  registrarse(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, data);
  }

  addRegister(table: string, post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${table}/`, post);
  }

  deleteRegister(table: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${table}/${id}/`);
  }
}
