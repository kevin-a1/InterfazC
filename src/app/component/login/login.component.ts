import { AbstractType, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo = "Iniciar Sesión";
  valid: Usuario;
  user: any = { username:'', contrasena:'', token:'',};
  tkn : any;
  constructor( private servicio: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.servicio.login(this.user.username, this.user.contrasena).subscribe(
      data =>{
        this.valid = data;
        localStorage.setItem('token', this.valid.token);
        this.router.navigate(['listar']);
      },
      err =>{console.log(err);
      }
    );
  }

}
