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

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  salvar() {
    this.usuarioService.putUsuario(this.user).subscribe((resp: User) => {
      this.user = resp
      this.router.navigate(['/cadastro'])
      location.assign('/cadastro')
    })
  }

}
