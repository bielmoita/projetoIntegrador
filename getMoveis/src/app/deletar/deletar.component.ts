import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  user:User = new User
  delOK:boolean = false

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.user = resp
    }, err => {
      console.log(`Erro: ${err.status}. Não conseguimos pegar o ID`)
    })
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.user.id).subscribe(()=>{
      this.delOK = true
      this.router.navigate(['/cadastro'])
      localStorage.setItem("delOK", this.delOK.toString())
    })

  }

  btnNao() {
    this.router.navigate(['/cadastro'])
  }


}
