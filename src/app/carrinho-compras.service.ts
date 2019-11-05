import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn : 'root'
})

export class CarrinhoComprasService {
  itens = [];
  constructor(
    private httpClientHandler : HttpClient
  ) {
  }

  adicionarItem(item){
    this.itens.push(item);
  }

  limparCarrinho(){
    this.itens = [];
    return this.itens;
  }

  getItens(){
    return this.itens;
  }

  getFormasDeEnvio(){
    return this.httpClientHandler.get('/assets/shipping.json');
  }
}