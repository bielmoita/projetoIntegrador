import { Component, OnInit } from '@angular/core'; //Typescript cadastro
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-eusuarios',
  templateUrl: './cadastro-eusuarios.component.html',
  styleUrls: ['./cadastro-eusuarios.component.css']
})
export class CadastroEUsuariosComponent implements OnInit {


  seta: string = "assets/img/Cadastro/Seta.png"

  listaUsuarios: User[]
  user: User = new User

  valSenha: boolean = false
  alerta: boolean = false

  deletou: boolean = false


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

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

    let item2: string = localStorage.getItem('delOK')

    if (item2 == "true") {
      this.deletou = true
      localStorage.clear()
      setTimeout(() => {
        location.assign('/cadastro')
      }, 5000)


    }



  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp
    })
  }

  cadastrar() {
    if (this.usuario.senha == this.usuario.senha2) {
      this.usuarioService.postUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
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


