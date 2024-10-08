import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'
import { Page } from "@nativescript/core";
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'carrito',
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  productos1: any[];
 


  
  public constructor(private router: Router,private apiService: ApiService, private page: Page) {
    // Use the component constructor to inject providers.
    this.obtenerTodos();
    
  }
  
  
  ngOnInit(): void {
    this.page.actionBarHidden = true;
    this.carrito = this.apiService.getCart();
  }
  public onTap() {
    this.router.navigate(["landing"]);
  }
  public perfil(){
    this.router.navigate(["verperfil"])
  }
  public productos(){
    this.router.navigate(["productos"])
  }
  public productosver(id){
    this.router.navigate(["productoVer"])
    
  }
  
  public gestion(){
    this.router.navigate(["gestion"])
  }

  
  public obtenerTodos(){
    this.apiService.getRegisters().subscribe((data: any[]) => {
        console.log(data);
        this.productos1 = data;
    });
  }

  public showDetail(item){
    this.router.navigate(['productoVer'], { queryParams: { id: item } });
  }

  removeFromCart(index: number): void {
    this.apiService.removeFromCart(index);
    alert("Producto eliminado del carrito !!");
  }

  clearCart(): void {
    this.apiService.clearCart();
    this.carrito = [];
    alert("Carrito vaciado");
  }



}






