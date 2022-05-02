import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  produits!:Produit[];

  constructor
  (
    private readonly produitService: ProduitService
  ) { }

  ngOnInit(): void {
    //this.produits = this.produitService.getProduits();
  }

  deleteProduit(produit: Produit): void {
    this.produitService.deleteProduit(produit.Id!).subscribe(()=> {
      console.log('DELETE')
    });
  }
}
