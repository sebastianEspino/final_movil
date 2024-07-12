
import { LoginComponent } from "./components/login/login";
import { VerPerfilComponent } from "./components/verPerfil/verperfil";
import { RegistroComponent } from "./components/registro/registro";
import { LandingComponent } from "./components/landing/landing";  
import { ProductosComponent } from "./components/productos/productos"; 
import { ProductoVerComponent } from "./components/productoVer/productoVer";
import { GestionComponent } from "./components/gestion/gestion";



export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "verperfil", component: VerPerfilComponent },
  { path: "registro", component: RegistroComponent },
  { path: "landing", component: LandingComponent },
  { path: "productos", component: ProductosComponent },
  { path: "productoVer", component: ProductoVerComponent },
  { path: "gestion", component: GestionComponent },
];

export const appComponents: any = [
  LoginComponent,
  VerPerfilComponent,
  RegistroComponent,
  LandingComponent,
  ProductosComponent,
  GestionComponent,
  ProductoVerComponent
];
