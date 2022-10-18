import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/interface/produtos.interface';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-busca-produtos',
  templateUrl: './lista-busca-produtos.component.html',
  styleUrls: ['./lista-busca-produtos.component.scss'],
})
export class ListaBuscaProdutosComponent implements OnInit {
  bens: Produtos[] = [];

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  private loadProdutos() {
    const params = this.route.snapshot.queryParams;
    this.produtoService.getAll(params).subscribe((res) => {
      this.bens = res;
    });
  }
}
