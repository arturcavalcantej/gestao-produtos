import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './shared/produtos/produtos.component';
import { ListaBuscaProdutosComponent } from './shared/lista-busca-produtos/lista-busca-produtos.component';
import { EditarProdutoComponent } from './shared/editar-produto/editar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ListaBuscaProdutosComponent,
    EditarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
