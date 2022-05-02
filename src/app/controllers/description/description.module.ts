import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionAddComponent } from './description-add/description-add.component';
import { DescriptionEditComponent } from './description-edit/description-edit.component';



@NgModule({
  declarations: [
    DescriptionAddComponent,
    DescriptionEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DescriptionModule { }
