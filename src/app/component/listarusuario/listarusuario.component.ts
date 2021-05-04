import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-listarusuario',
  templateUrl: './listarusuario.component.html',
  styleUrls: ['./listarusuario.component.css']
})
export class ListarusuarioComponent implements OnInit {
  usuarios: any[];
  constructor( private servicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.listar().subscribe(
      data =>{
        this.usuarios = data;
      },
      err =>{console.log(err);
      }
    );
  }

  deleteToken(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  nuevo(){
    this.router.navigate(['/nuevo']);
  }

}
