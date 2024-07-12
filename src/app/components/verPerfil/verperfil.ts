import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";

@Component({
  selector: 'verperfil',
  templateUrl: './verperfil.html',
  styleUrls: ['./verperfil.css']
})
export class VerPerfilComponent implements OnInit {
  rol: string;
  nombre: string;
  foto: string;
  verperfil;
  userId: number;
  email: string = '';
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
    if (localStorage.getItem('sena.token')) {
      this.verperfil = JSON.parse(localStorage.getItem('sena.user'))
      console.log(this.verperfil.foto)
      this.nombre = this.verperfil.nombre
      this.email = this.verperfil.email
    }
    else {
      this.rol = ""
      this.nombre = ""
      this.email = ""
      this.router.navigate(['login']);
    }
  }

  

  
  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  public onTap() {
    this.router.navigate(["landing"]);
    console.log(localStorage.getItem('sena.user'))
  }
  public perfil(){
    this.router.navigate(["verperfil"])
  }
  public productos(){
    this.router.navigate(["productos"])
  }
  public cerrar_sesion(){
    localStorage.clear()
    this.router.navigate(["login"])
  }
}  