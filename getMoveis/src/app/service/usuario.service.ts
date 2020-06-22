import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

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

<<<<<<< HEAD
<<<<<<< HEAD

  deleteUsuario(id:number) {
    return this.http.delete(`http://93.188.161.223:9000/user/${id}`)
=======
  putUsuario(usuario: User) {
    return this.http.put('http://93.188.161.223:9000/user', usuario)
=======
  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario)
>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f
  }

  getByIdUsuario(id: number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }

  //Delete
  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }

  //Update(put)

  putAllUsuarios(usuario: Usuario) {
    return this.http.put('http://93.188.161.223:9000/user', usuario)

  }

  getByIdUsuarios(id: number) {
    return this.http.get(`http://93.188.161.223:9000/user/${id}`)
>>>>>>> 7f0415af81034f3e020735b3111dde5c134e20f4
  }

}
