import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core'
import { Page } from "@nativescript/core";
import { ActivatedRoute } from '@angular/router';
import { Dialogs } from '@nativescript/core'
import { map, filter, scan } from 'rxjs/operators';
import { TextField } from "@nativescript/core/ui/text-field";
import { ApiService } from './api.service';



@Component({
  selector: 'productoVer',
  templateUrl: './productoVer.html',
  styleUrls: ['./productoVer.css'],
})
export class ProductoVerComponent implements OnInit {

  id:number;
  details: any;
  public constructor(private router: Router, private page: Page, private activatedRoute: ActivatedRoute,private apiService: ApiService) {
    // Use the component constructor to inject providers.
    this.obtenerDetails();
  
    }

    public obtenerDetails(){
      this.activatedRoute.queryParams
          .subscribe((params) => {
            this.apiService.getRegisterById(params.id).subscribe((data: any[]) => {
              console.log(data);
              this.details = data;
          });
          }
        );
      
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
    public back(){
      this.router.navigate(['productos'])
    }
  
  }

   










  
