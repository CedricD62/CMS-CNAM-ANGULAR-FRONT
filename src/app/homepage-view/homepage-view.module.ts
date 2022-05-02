import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProduitComponent } from './list/produit/produit.component';
import { DescriptionComponent } from './list/description/description.component';
import { ImageComponent } from './list/image/image.component';
import { StockComponent } from './list/stock/stock.component';
import { TagComponent } from './list/tag/tag.component';
import { VariantComponent } from './list/variant/variant.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageViewComponent } from './homepage-view.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: HomepageViewComponent
  }
]

@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    ProduitComponent,
    DescriptionComponent,
    ImageComponent,
    StockComponent,
    TagComponent,
    VariantComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }
