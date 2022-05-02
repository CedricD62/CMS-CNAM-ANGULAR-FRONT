import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAddComponent } from './image-add/image-add.component';
import { ImageEditComponent } from './image-edit/image-edit.component';



@NgModule({
  declarations: [
    ImageAddComponent,
    ImageEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageModule { }
