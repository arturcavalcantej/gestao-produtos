export interface Produtos {
  id_produto: number;
  nome: string;
  status: boolean;
  preco: string;
  descricao: string;
  imagem: string;

}

export interface Prod{
  count: number;
  next: string;
  previous: string;
  results: Produtos[];
}
