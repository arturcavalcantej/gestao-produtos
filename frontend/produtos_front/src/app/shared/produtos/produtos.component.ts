import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/interface/produtos.interface';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  formGroup!: FormGroup;
  formGroupBusca!: FormGroup;
  bens: Produtos[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private router: Router,

  ) {}


  ngOnInit(): void {
    this.loadProdutos();
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      id_produto: new FormControl(''),
      nome: new FormControl(null),
      status: new FormControl(null),
      preco: new FormControl(),
      descricao: new FormControl(),
    });
  }

  private loadProdutos() {
    const params = this.route.snapshot.queryParams;
    this.produtoService.getAll(params).subscribe(res => {
      this.bens = res;
    });
  }

  onSubmit(){
    this.produtoService.create(this.formGroup.value).subscribe(res=>{
      this.ngOnInit();
    })
  }

  del(id: number){
    if (confirm("Tem certeza que deseja remover este bem?"))
    this.produtoService.delete(id)
    .subscribe( res=>{
      this.ngOnInit();
    })
  }




  submit = () => {
    const data = this.formGroupBusca.value
    const query = {
      status: data.status,
      preco_inicio: data.comprador,
      preco_final: data.preco_final,
      descricao: data.descricao,
      ordenacao: data.ordenacao,
      ordenacao_reversa: data.ordenacao_reversa,
    }
    this.router.navigate(['../listar/'], {
      queryParams: query,
      relativeTo: this.route,
    })
  }

}
