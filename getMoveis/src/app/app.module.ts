import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { CadastroEUsuariosComponent } from './cadastro-eusuarios/cadastro-eusuarios.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import { DeletarComponent } from './deletar/deletar.component'
=======
import { EditarComponent } from './editar/editar.component'
>>>>>>> 7f0415af81034f3e020735b3111dde5c134e20f4
=======
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { SofasComponent } from './sofas/sofas.component';
import { ProdutosComponent } from './produtos/produtos.component'
>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FAQComponent,
    ContatoComponent,
    SobrenosComponent,
    CadastroEUsuariosComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    DeletarComponent
=======
    EditarComponent
>>>>>>> 7f0415af81034f3e020735b3111dde5c134e20f4
=======
    EditarComponent,
    DeletarComponent,
    SofasComponent,
    ProdutosComponent
>>>>>>> cf9e0d7d404b28edb840494fe257516ac1871e6f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
