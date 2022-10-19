import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/interface/produtos.interface';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss'],
})
export class EditarProdutoComponent implements OnInit {
  formGroup!: FormGroup;
  bens: Produtos[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      nome: new FormControl(null),
      status: new FormControl(null),
      preco: new FormControl(null),
      descricao: new FormControl(null),
      imagem: new FormControl(null),
    });
  }

  onSubmit() {
    this.produtoService
      .update(this.route.snapshot.params['id'], this.formGroup.value)
      .subscribe((res) => {
        this.router.navigate(['../../'], {
          relativeTo: this.route,
        });
      });
  }
}
