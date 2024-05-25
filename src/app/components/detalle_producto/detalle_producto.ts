import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";

@Component({
  selector: 'verperfil',
  templateUrl: './verperfil.html',
  styleUrls: ['./verperfil.css']
})
export class VerPerfilComponent implements OnInit {
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
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
  public cerrar_sesion(){
    this.router.navigate(["login"])
  }
}  