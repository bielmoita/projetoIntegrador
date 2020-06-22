import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Usuario } from '../model/Usuario';
=======
import { User } from '../model/User';
>>>>>>> lucivaldo

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // Implementação do CRUD

  //Read
  getAllUsuarios() {
    return this.http.get('http://localhost:8080/usuarios')
  }

  postUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario)
  }

  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario)
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }

  //Delete
  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }

  //Update(put)

  putAllUsuarios(user: User){
    return this.http.put('http://93.188.161.223:9000/user', user)

  }

  getByIdUsuarios(id:number){
    return this.http.get(`http://93.188.161.223:9000/user/${id}`)
  }

}
