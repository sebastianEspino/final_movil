import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Dialogs, Page, TextField } from '@nativescript/core';
import { openUrl } from '@nativescript/core/utils';
import { ApiService } from './api.service';


@Component({
  selector: 'registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})

export class RegistroComponent implements OnInit {
  isAcceptTermin: boolean = false;
  showPasswordIcon: boolean = true;
  showConfirmPasswordIcon: boolean = true;
  passwordField: TextField;
  confirmPasswordField: TextField;
  nombre = '';
  correo = '';
  password = '';
  confirmPassword = '';

  public constructor(private router: Router, private page: Page, private apiService: ApiService) { }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  public onLogin(): void{
    this.router.navigate(["login"]);
  }

  onSwitchChange(args) {
    this.isAcceptTermin = args.value;
    console.log('Switch value:', this.isAcceptTermin);
  }

  registrarse() {
    if(!this.isAcceptTermin) {
      Dialogs.alert({
        title: 'Info',
        message: `Tienes que aceptar los Términos y Condiciones.`,
        okButtonText: 'OK',
        cancelable: true
      });
      return;
    }
    console.log(`${this.nombre, this.correo, this.password, this.confirmPassword}`);
    const data = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    this.apiService.registrarse(data).subscribe((res) => {
      console.log(res.respuesta);
      if(res.respuesta < 204) {
        Dialogs.alert({
          title: 'Info',
          message: `${res.message}`,
          okButtonText: 'OK',
          cancelable: true
        });
        this.router.navigate(['login']);
      } else {
        Dialogs.alert({
          title: 'Info',
          message: `${res.message}`,
          okButtonText: 'OK',
          cancelable: true
        });
      }
    }, error => {
      if(error.status === 404) {
        Dialogs.alert({
          title: 'Alerta',
          message: 'Usuario o contraseña incorrectos',
          okButtonText: 'OK',
          cancelable: true
        });
      } else {
        Dialogs.alert({
          title: 'Respuesta',
          message: error.error.message,
          okButtonText: 'OK',
          cancelable: true
        });
      }
    });
  }

  public togglePasswordVisibility(field: string): void {
    if (field === 'password') {
        this.showPasswordIcon = !this.showPasswordIcon;
        this.passwordField.secure = !this.passwordField.secure;
    } else if (field === 'confirmPassword') {
        this.showConfirmPasswordIcon = !this.showConfirmPasswordIcon;
        this.confirmPasswordField.secure = !this.confirmPasswordField.secure;
    }
  }

  textFieldLoaded(args, field: string): void {
    if (field === 'password') {
        this.passwordField = args.object;
    } else if (field === 'confirmPassword') {
        this.confirmPasswordField = args.object;
    }
  }

  inputChange(args, campo) {
    let textField = <UITextField>args.object;
    const options = {
      'nombre': () => {
        this.nombre = textField.text;
      },
      'correo': () => {
        this.correo = textField.text;
      },
      'password': () => {
        this.password = textField.text;
      },
      'confirmPassword': () => {
        this.confirmPassword = textField.text;
      }
    }
    return options[campo]();
  }

  public navigateToTerms(): void {
    openUrl('http://repwheels.pythonanywhere.com/tyc');
  }

  
}