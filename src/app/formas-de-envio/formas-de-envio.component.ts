import { Component, OnInit } from '@angular/core';

import { CarrinhoComprasService } from '../carrinho-compras.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-formas-de-envio',
  templateUrl: './formas-de-envio.component.html',
  styleUrls: ['./formas-de-envio.component.css']
})
export class FormasDeEnvioComponent implements OnInit {

  constructor(
    private carrinhoComprasService : CarrinhoComprasService,
    private rota : ActivatedRoute
  ) { }

  formasDeEnvio = []; 
  
  ngOnInit() {
    this.formasDeEnvio = this.carrinhoComprasService.getFormasDeEnvio();
  }

  getFormasDeEnvio(){
   return this.formasDeEnvio;
  }

}