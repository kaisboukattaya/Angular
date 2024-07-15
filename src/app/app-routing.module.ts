import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddproduitsComponent } from './addproduits/addproduits.component';

const routes: Routes = [
  {path:"produits",component:ProduitsComponent},
  {path:"addproduits",component:AddproduitsComponent},
  { path: "", redirectTo: "produits", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
