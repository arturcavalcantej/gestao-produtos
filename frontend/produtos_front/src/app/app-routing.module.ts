import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './shared/editar-produto/editar-produto.component';
import { ListaBuscaProdutosComponent } from './shared/lista-busca-produtos/lista-busca-produtos.component';
import { ProdutosComponent } from './shared/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'listar', component: ListaBuscaProdutosComponent },
  { path: 'editar/:id', component: EditarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
