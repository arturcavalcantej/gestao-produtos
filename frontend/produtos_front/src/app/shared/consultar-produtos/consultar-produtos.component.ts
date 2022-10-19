import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.component.html',
  styleUrls: ['./consultar-produtos.component.scss'],
})
export class ConsultarProdutosComponent implements OnInit {
  formGroupBusca!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._createFormBusca();
  }

  private _createFormBusca() {
    this.formGroupBusca = this.formBuilder.group({
      status: new FormControl(false),
      preco_inicio: new FormControl(null),
      preco_fim: new FormControl(null),
      ordenacao: new FormControl(false),
      ordenacao_reversa: new FormControl(false),
    });
  }

  submit = () => {
    const data = this.formGroupBusca.value;
    const query = {
      status: data.status,
      preco_inicio: data.preco_inicio,
      preco_fim: data.preco_fim,
      ordenacao: data.ordenacao,
      ordenacao_reversa: data.ordenacao_reversa,
    };
    this.router.navigate(['../listar/'], {
      queryParams: query,
      relativeTo: this.route,
    });
  };
}
