import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { exit } from "nativescript-exit";
import { ApiService } from './api.service';
import { Dialogs } from '@nativescript/core'
import { ActivatedRoute } from '@angular/router';
import { openUrl } from '@nativescript/core/utils';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class LoginComponent {
  nick: string = "sebas";
  password: string = "11";
  public constructor(private router: Router, private apiService: ApiService, private activatedRoute: ActivatedRoute) {
      // Use the component constructor to inject providers.
      console.info("Averiguando si hay datos...");
      if (localStorage.getItem('sena.token')){
          console.log("Bienvenido "+JSON.parse( localStorage.getItem('sena.user')).nombre+"!!");
          this.router.navigate(['landing']);
      }
  }

  inputChange(args, campo) {
      // blur event will be triggered when the user leaves the TextField
      let textField = <UITextField>args.object;
      if (campo == "nick"){
          this.nick = textField.text;
      }
      else if(campo == "password"){
          this.password = textField.text;
      }
  }

  public loguear(){
      let data = {
          username: this.nick,
          password: this.password
      };
      console.log(`${this.nick}, ${this.password}`)
      this.apiService.login(data).subscribe((res) => {
          if (res && res.token.length > 0){
              console.info(res)
              localStorage.setItem('sena.token', res.token);
              localStorage.setItem('sena.user', JSON.stringify(res.user));
              Dialogs.alert({
                  title: 'Info!',
                  message: 'Bienvenido!!',
                  okButtonText: 'OK',
                  cancelable: true,
              });

              this.router.navigate(['landing'], { queryParams: { id: res.user.user_id } })
          }
      },error => {
          console.log(error.status)
          if (error.status == 400){
              Dialogs.alert({
                  title: 'Alerta',
                  
                  message: 'Usuario o contraseña incorrectos',
                  okButtonText: 'OK',
                  cancelable: true,
              });
          }
          else{
              Dialogs.alert({
                  title: 'Respuesta:',
                  message: error.error.message,
                  okButtonText: 'OK',
                  cancelable: true,
              });
          }
      });
  }

  public onExit(): void {
      exit(); // will close application
  }

  public navigateToTerms(): void {
    openUrl('http://repwheels.pythonanywhere.com/tyc');
  }
}
