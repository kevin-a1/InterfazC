import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from "../../model/usuario";

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  username = "";
  contrasena = "";
  nombreCompleto = "";


  constructor(private router:Router, private servicio: UsuarioService) { }

  ngOnInit(): void {
  }
  nuevo(){
    let user = new Usuario(this.username,this.contrasena, this.nombreCompleto);
    console.log(user);

    this.servicio.guardar(user).subscribe(
      data =>{

        alert("Usuario Ingresado ");
        this.router.navigate(['listar'])
      },err =>{console.log(err);
      }
    );
  }

}
