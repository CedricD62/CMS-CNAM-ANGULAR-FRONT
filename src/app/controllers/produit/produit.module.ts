import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { produitRoutes } from './produit.routing';
import { ProduitAddModule } from './produit-add/produit-add.module';
import { ProduitEditModule } from './produit-edit/produit-edit.module';
import { ProduitAddComponent } from './produit-add/produit-add.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(produitRoutes),
    ProduitAddModule,
    ProduitEditModule
  ],exports:[
    ProduitAddComponent
  ]
})
export class ProduitModule { }
