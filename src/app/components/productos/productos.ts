import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { ApiService } from './api.service';
import { ItemEventData } from "@nativescript/core/ui/list-view";
import { Dialogs } from '@nativescript/core'
import { Page } from "@nativescript/core";

@Component({
  selector: 'productos',
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent implements OnInit {
  productos1: any[];
 
  public constructor(private router: Router,private apiService: ApiService, private page: Page) {
    // Use the component constructor to inject providers.
    this.obtenerTodos();
    
  }

  public onItemTap(args: ItemEventData) {
    let register = this.productos[args.index]
    //console.log(`Index: ${args.index}; Item: ${register.id}`);
    //console.log(`ID: ${register.id} - NOMBRE: ${register.nombre_cat} - DESCRCIPCIÓN: ${register.desc} `)
  
    //Consultar por ID en la API
    this.apiService.getRegisterById(register.id).subscribe((res) => {
        Dialogs.alert({
            title: 'Detalles!',
            message: `ID: ${res.id}\nNOMBRE: ${res.nombre}\nDESCRCIPCIÓN: ${res.descripcion_producto} `,
            okButtonText: 'OK',
            cancelable: true,
        });
        console.info(res)
    });
  }
  
  public eliminarCat(item){
    Dialogs.confirm({
        title: 'Confirmación',
        message: `Está seguro de eliminar este registro ? ${item.nombre}`,
        okButtonText: 'SI',
        cancelButtonText: 'No',
        neutralButtonText: 'Cancelar',
        })
        .then((result) => {
            console.log(result);
            if (result){
                this.apiService.deleteRegister(item.id).subscribe((res: string) => {
                    Dialogs.alert({
                        title: 'Respuesta:',
                        message: "Categoría eliminada correctamente!!",
                        okButtonText: 'OK',
                        cancelable: true,
                    });
                    this.obtenerTodos();
                },error => {
                    console.log(error.status)
                    if (error.status == 400){
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: error.error.message,
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                    }
                    else{
                        Dialogs.alert({
                            title: 'Respuesta:',
                            message: error.message,
                            okButtonText: 'OK',
                            cancelable: true,
                        });
                    }
  
                });
            }
        });
  
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



}






