import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService} from '../carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  constructor(
    private carrinhoCompras: CarrinhoComprasService
  ) { }

  ngOnInit() {
    
  }

  carregarItensCarrinho(){
    return this.carrinhoCompras.getItens();
  }

}