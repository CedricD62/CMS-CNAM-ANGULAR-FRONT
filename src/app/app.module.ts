import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomepageVieuxComponent } from './homepage-vieux/homepage-vieux.component';
import { HomepageViewComponent } from './homepage-view/homepage-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageVieuxComponent,
    HomepageViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
