import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { Page } from "@nativescript/core";

@Component({
  selector: 'registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent implements OnInit{
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
}

}