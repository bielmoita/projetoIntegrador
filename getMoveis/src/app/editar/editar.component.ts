import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario

  valSenha: boolean = false

  alerta: boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let codigoCpf = this.route.snapshot.params['codigoCpf']
    this.findById(codigoCpf)

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

  findById(codigoCpf: number) {
    this.usuarioService.getByIdUsuario(codigoCpf).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  salvar() {

    if (this.usuario.senha == this.usuario.senha2) {
      this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
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
