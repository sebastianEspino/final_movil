import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl ='http://10.171.68.189:8000/api/1.0';

  constructor(private http: HttpClient) { }

  getRegisters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Productos`);
  }

  getRegisterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Productos/${id}/`);
  }

      // Obtener el carrito desde localStorage
  getCart(): any[] {
    const cartString = localStorage.getItem(this.apiUrl);
    return cartString ? JSON.parse(cartString) : [];
  }
  // Añadir un producto al carrito
  addToCart(producto: any): void {
    let cart = this.getCart();
    cart.push(producto);
    localStorage.setItem(this.apiUrl, JSON.stringify(cart));
  }

  // Eliminar un producto del carrito
  removeFromCart(index: number): void {
    let cart = this.getCart();
    cart.splice(index, 1);
    localStorage.setItem(this.apiUrl, JSON.stringify(cart));
  }

  // Vaciar el carrito
  clearCart(): void {
    localStorage.removeItem(this.apiUrl);
  }

}