import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ProduitEditComponent } from './produit-edit.component';

const routes: Routes=[
  {
    path:'',
    component: ProduitEditComponent
  }
]

@NgModule({
  declarations: [ProduitEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule
  ],
  exports:[
    ProduitEditComponent
  ]
})
export class ProduitEditModule { }
