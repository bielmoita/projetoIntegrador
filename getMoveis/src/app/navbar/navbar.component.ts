import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../model/Produto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faUser = faUser
  faShoppingCart = faShoppingCart
  faSearch = faSearch

  nome: string

  listaProdutos: Produto[]

  constructor(private produtoService: ProdutoService, public router: Router) { }

  ngOnInit(): void {
  }

  pesquisarPorNome() {
    localStorage.setItem('nome', this.nome)
    this.router.navigate(['/produtos'])
    location.assign('/produtos')
  }
}


