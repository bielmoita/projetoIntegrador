import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  listaProdutos: Produto[]

  usuario: string = localStorage.getItem('usuario')

  constructor(private produtoService: ProdutoService, public router: Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');

    if (token == null) {
      alert('Login necessário');
      this.router.navigate(['/home'])
    }

    this.getallCarrinho()
  }

  getallCarrinho() {
    this.produtoService.GetByCarrinho(this.usuario).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

}
