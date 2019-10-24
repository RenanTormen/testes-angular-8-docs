import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta-produtos',
  templateUrl: './alerta-produtos.component.html',
  styleUrls: ['./alerta-produtos.component.css']
})
export class AlertaProdutosComponent implements OnInit {

  @Input() produto;
  @Output() notificador = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}