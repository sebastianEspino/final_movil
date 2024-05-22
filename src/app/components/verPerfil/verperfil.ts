import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 

@Component({
  selector: 'verperfil',
  templateUrl: './verperfil.html',
  styleUrls:['./verperfil.css']
})
export class VerPerfilComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}