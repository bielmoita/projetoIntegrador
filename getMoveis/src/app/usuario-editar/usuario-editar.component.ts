import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  user: User = new User

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.usuarioService.getByIdUsuarios(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  salvar(){
    this.usuarioService.putAllUsuarios(this.user).subscribe((resp: User) => {
      this.user = resp
      this.router.navigate(['/cadastro'])
      location.assign('/cadastro')
    })
  }
  
}
