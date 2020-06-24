import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FAQComponent } from './faq/faq.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { CadastroEUsuariosComponent } from './cadastro-eusuarios/cadastro-eusuarios.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { SofasComponent } from './sofas/sofas.component';
import { ProdutosComponent } from './produtos/produtos.component'
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'sobrenos', component: SobrenosComponent },
  { path: 'cadastro', component: CadastroEUsuariosComponent },
  { path: 'usuarios/:codigoCpf', component: EditarComponent },
  { path: 'deletar/:id', component: DeletarComponent },
  { path: 'sofas', component: SofasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'cadastro', component: CadastroEUsuariosComponent },
  { path: 'editar/:id', component: UsuarioEditarComponent },
  { path: 'carrinho', component: CarrinhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
