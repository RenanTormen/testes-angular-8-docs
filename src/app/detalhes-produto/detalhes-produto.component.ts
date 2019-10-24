import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from '../products';

@Component({
  selector: "app-detalhes-produto",
  templateUrl: "./detalhes-produto.component.html",
  styleUrls: ["./detalhes-produto.component.css"]
})
export class DetalhesProdutoComponent implements OnInit {
  
  produto;

  constructor(
    private rota: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.rota.paramMap.subscribe(parametros =>{
      this.produto = products[parametros.get('idProduto')];
    });
  }
}
