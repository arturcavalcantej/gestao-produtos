import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prod, Produtos } from 'src/app/interface/produtos.interface';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  formGroup!: FormGroup;
  formGroupBusca!: FormGroup;
  teste: any

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private router: Router,

  ) {}


  ngOnInit(): void {
    this.loadProdutos();
    this._createForm();
    this._createFormBusca();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      id_produto: new FormControl(''),
      nome: new FormControl(null),
      status: new FormControl(null),
      preco: new FormControl(null),
      descricao: new FormControl(null),
      imagem: new FormControl(null),
    });
  }

  private loadProdutos() {
    const params = this.route.snapshot.queryParams;
    this.produtoService.getAll(params).subscribe(res => {
      this.teste = res.results;
    });
  }

  onSubmit(){
    this.produtoService.create(this.formGroup.value).subscribe(res=>{
      this.ngOnInit();
    })
  }

  del(id: number){
    if (confirm("Tem certeza que deseja remover este produto?"))
    this.produtoService.delete(id)
    .subscribe( res=>{
      this.ngOnInit();
    })
  }
// Busca do queryparams
  private _createFormBusca() {
    this.formGroupBusca = this.formBuilder.group({
      status: new FormControl(null),
      preco_inicio: new FormControl(null),
      preco_fim: new FormControl(null),
      ordenacao: new FormControl(false),
      ordenacao_reversa: new FormControl(false),
    });
  }


  submit = () => {
    const data = this.formGroupBusca.value
    const query = {
      status: data.status,
      preco_inicio: data.preco_inicio,
      preco_fim: data.preco_fim,
      ordenacao: data.ordenacao,
      ordenacao_reversa: data.ordenacao_reversa,
    }
    this.router.navigate(['../listar/'], {
      queryParams: query,
      relativeTo: this.route,
    })
  }

}
