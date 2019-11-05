import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class CarrinhoComprasService {
  itens = [];
  constructor() {
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
}