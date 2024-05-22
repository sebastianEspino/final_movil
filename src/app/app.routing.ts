
import { LoginComponent } from "./components/login/login";
import { VerPerfilComponent } from "./components/verPerfil/verperfil";
import { RegistroComponent } from "./components/registro/registro";
import { LandingComponent } from "./components/landing/landing";  
import { ProductosComponent } from "./components/productos/productos"; 





export const appRoutes: any = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "verperfil", component: VerPerfilComponent },
  { path: "registro", component: RegistroComponent },
  { path: "landing", component: LandingComponent },
  { path: "productos", component: ProductosComponent },
];

export const appComponents: any = [
  LoginComponent,
  VerPerfilComponent,
  RegistroComponent,
  LandingComponent,
  ProductosComponent,
];
