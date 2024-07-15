import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddproduitsComponent } from './addproduits/addproduits.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    AddproduitsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
