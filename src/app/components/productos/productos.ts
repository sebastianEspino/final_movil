import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { Page } from "@nativescript/core";

@Component({
  selector: 'productos',
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
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
}






