export class Usuario {
  id?: number;
  username: string;
  contrasena: string;
  nombreCompleto: string;
  token?: string;
  constructor(username: string, contrasena: string, nombreCompleto:string){
    this.username = username;
    this.contrasena = contrasena;
    this.nombreCompleto = nombreCompleto;
  }
}
