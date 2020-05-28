import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  user: User = new User

  valSenha: boolean = false

  alerta: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)

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

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  salvar() {

    if (this.user.senha == this.user.senha2) {
      this.usuarioService.putUsuario(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/cadastro'])
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
