import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';


=======
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f
@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

<<<<<<< HEAD
  usuario:UsuarioService = new UsuarioService
  delOK:boolean = false
=======
  usuario: Usuario = new Usuario
  delOK: boolean = false
>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.usuarioService.getByIdCadastro(id).subscribe((resp: UsuarioService)=>{
      this.usuario = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o ID`)
    })
  }


  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(()=>{
      this.delOK = true
      this.router.navigate(['/cadastro'])
      localStorage.setItem("delOK", this.delOK.toString())

=======
    let id: number = this.route.snapshot.params['id']
    this.findById(id)

  }

  findById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    }, err => {
      console.log(`Erro: ${err.status}. Não conseguimos pegar o ID`)
    })
  }

  btnSim() {
    this.usuarioService.deleteUsuario(this.usuario.codigoCpf).subscribe(() => {
      this.delOK = true
      this.router.navigate(['/cadastro'])
      localStorage.setItem("delOK", this.delOK.toString())
>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f
    })

  }

<<<<<<< HEAD
  btnNao(){
    this.router.navigate(['/cadastro'])
  }

=======
  btnNao() {
    this.router.navigate(['/cadastro'])
  }


>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f
}
