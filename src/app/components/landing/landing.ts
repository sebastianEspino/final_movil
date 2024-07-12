import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent implements OnInit {
  id:number;
  public constructor(private router: Router, private page: Page,private activatedRoute: ActivatedRoute) {
    // Use the component constructor to inject providers.
  }



  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }
  public onTap() {
    this.router.navigate(["landing"]);
  }
  public perfil(){
    this.activatedRoute.queryParams
        .subscribe((params) => {
         this.id = params.id
         console.log(params.id)
         this.router.navigate(["verperfil"],{ queryParams: { id: this.id } })
        }
      );
      
  
  }
  public productos(){
    this.router.navigate(["productos"])
  }
}