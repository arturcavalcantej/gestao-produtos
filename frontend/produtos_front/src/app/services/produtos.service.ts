import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Prod, Produtos } from '../interface/produtos.interface';

const baseUrl = 'http://127.0.0.1:8000/api/produtos/';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAll(queryParams: Params): Observable<any> {
    return this.http.get<Prod>(`${baseUrl}`,{
      params: queryParams,
    });
  }

  create(data: Produtos): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: number, data: Produtos): Observable<any> {
    return this.http.patch(`${baseUrl}${id}/`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Produtos>(`${baseUrl}${id}/`);
  }

}
