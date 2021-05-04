import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListarusuarioComponent } from './component/listarusuario/listarusuario.component';
import { CrearusuarioComponent } from "./component/crearusuario/crearusuario.component";
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listar', component: ListarusuarioComponent},
  { path: 'nuevo', component: CrearusuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
