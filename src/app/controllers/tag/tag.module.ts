import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';



@NgModule({
  declarations: [
    TagAddComponent,
    TagEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TagModule { }
