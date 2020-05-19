import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // Implementação do CRUD

  //Read
  getAllUsuarios() {
    return this.http.get('http://93.188.161.223:9000/user')
  }

  postUsuario(usuario: User) {
    return this.http.post('http://93.188.161.223:9000/user', usuario)
  }

}
