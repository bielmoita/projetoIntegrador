import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos: Produto[]

  nome: string = localStorage.getItem('nome')

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.pesquisarPorNome()
  }

  findallProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  pesquisarPorNome() {
    this.produtoService.GetByNome(this.nome).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

}
