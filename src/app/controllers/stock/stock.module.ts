import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockAddComponent } from './stock-add/stock-add.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';



@NgModule({
  declarations: [
    StockAddComponent,
    StockEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StockModule { }
