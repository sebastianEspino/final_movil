import { Router } from "@angular/router"; 
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";

@Component({
  selector: 'login',
  templateUrl:'./login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  public constructor(private router: Router, private page: Page) {
    // Use the component constructor to inject providers.
  }
  ngOnInit(): void {
    this.page.actionBarHidden = true;
}
 
}