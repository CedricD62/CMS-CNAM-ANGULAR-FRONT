import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantAddComponent } from './variant-add/variant-add.component';
import { VariantEditComponent } from './variant-edit/variant-edit.component';



@NgModule({
  declarations: [
    VariantAddComponent,
    VariantEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VariantModule { }
