import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User';

@Component({
  selector: 'app-cadastro-eusuarios',
  templateUrl: './cadastro-eusuarios.component.html',
  styleUrls: ['./cadastro-eusuarios.component.css']
})
export class CadastroEUsuariosComponent implements OnInit {

  listaUsuarios: User[]
  user: User = new User

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.findAllUsuarios()
    window.scroll(0, 0)

  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: User[]) => {
      this.listaUsuarios = resp
    })
  }

  cadastrar() {
    this.usuarioService.postUsuario(this.user).subscribe((resp: User) => {
      this.user = resp
      location.assign('/cadastro')
    })
  }

}
