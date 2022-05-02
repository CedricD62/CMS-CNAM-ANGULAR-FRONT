import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ProduitAddComponent } from './produit-add.component';

const routes: Routes=[
  {
    path:'',
    component: ProduitAddComponent
  }
]

@NgModule({
  declarations: [ProduitAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule
  ],
  exports:[
    ProduitAddComponent
  ]
})
export class ProduitAddModule { }
