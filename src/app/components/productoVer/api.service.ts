import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  

  apiUrl = 'http://10.171.68.25:8000/api/1.0';

  constructor(private http: HttpClient) { }

  getRegisters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Productos`);
  }

  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Productos/${id}/`);
  }

  addRegister(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Productos`, post);
  }

  updateRegister(id: number, post: any): Observable<any> {
    console.log(`datos: ${post.nombre_cat} - ${post.desc}`)
    return this.http.put<any>(`${this.apiUrl}/Productos/${id}/`, post);
  }

  deleteRegister(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Productos/${id}/`);
  }

  getCart(): any[] {
    const cartString = localStorage.getItem(this.apiUrl);
    return cartString ? JSON.parse(cartString) : [];
  }


  addToCart(producto: any): void {
    let cart = this.getCart();
    cart.push(producto);
    localStorage.setItem(this.apiUrl, JSON.stringify(cart));
  }
}