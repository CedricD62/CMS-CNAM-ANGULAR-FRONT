import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitAddComponent } from './produit-add/produit-add.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';



@NgModule({
  declarations: [
    ProduitAddComponent,
    ProduitEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { }
