import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProduitComponent } from './list/produit/produit.component';
import { DescriptionComponent } from './list/description/description.component';
import { ImageComponent } from './list/image/image.component';
import { StockComponent } from './list/stock/stock.component';
import { TagComponent } from './list/tag/tag.component';
import { VariantComponent } from './list/variant/variant.component';



@NgModule({
  declarations: [
    ListComponent,
    ProduitComponent,
    DescriptionComponent,
    ImageComponent,
    StockComponent,
    TagComponent,
    VariantComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageViewModule { }
