import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit
{
   produit:string[]=["PC kais", "Imprimante Epson", "Tablette Samsung"];
   //produit!:Array<string>
  
  ngOnInit(): void {

    
    
  }
  
 
  

}
