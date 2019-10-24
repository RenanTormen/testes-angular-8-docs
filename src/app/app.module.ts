import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AlertaProdutosComponent } from './alerta-produtos/alerta-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'produtos/:idProduto', component: DetalhesProdutoComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    AlertaProdutosComponent,
    DetalhesProdutoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/