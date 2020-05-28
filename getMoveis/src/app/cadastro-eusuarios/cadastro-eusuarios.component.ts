import { Component, OnInit } from '@angular/core'; //Typescript cadastro
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-eusuarios',
  templateUrl: './cadastro-eusuarios.component.html',
  styleUrls: ['./cadastro-eusuarios.component.css']
})
export class CadastroEUsuariosComponent implements OnInit {

  listaUsuarios: User[]
  user: User = new User

  valSenha: boolean = false

  alerta: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.findAllUsuarios()
    window.scroll(0, 0)

    let item: string = localStorage.getItem('valSenha')

    if (item == "true") {
      this.alerta = true
      localStorage.clear()

      setTimeout(() => {
        location.assign('/cadastro')
      }, 5000)


    }



  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: User[]) => {
      this.listaUsuarios = resp
    })
  }

  cadastrar() {
    if (this.user.senha == this.user.senha2) {
      this.usuarioService.postUsuario(this.user).subscribe((resp: User) => {
        this.user = resp
        location.assign('/cadastro')
        this.valSenha = false
      })

    }
    else {
      this.valSenha = true
      // this.router.navigate(['/cadastro'])
      localStorage.setItem("valSenha", this.valSenha.toString())
      location.assign('/cadastro')
      err => {
        console.log(`Erro: ${err.status}, Não conseguimos validar a senha`);
      }





    }

  }


}


