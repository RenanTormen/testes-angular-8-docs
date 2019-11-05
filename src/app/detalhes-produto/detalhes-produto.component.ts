import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from '../products';
import { CarrinhoComprasService} from '../carrinho-compras.service'


@Component({
  selector: "app-detalhes-produto",
  templateUrl: "./detalhes-produto.component.html",
  styleUrls: ["./detalhes-produto.component.css"]
})
export class DetalhesProdutoComponent implements OnInit {
  
  produto;

  constructor(
    private rota: ActivatedRoute,
    private carrinhoCompras: CarrinhoComprasService
  ) {}

  ngOnInit() {
    this.rota.paramMap.subscribe(parametros =>{
      this.produto = products[parametros.get('idProduto')];
    });
  }

  adicionarAoCarrinho(produto){
    window.alert('Seu produto foi adicionado ao carrinho com sucesso!')
    this.carrinhoCompras.adicionarItem(produto);
  }
}

