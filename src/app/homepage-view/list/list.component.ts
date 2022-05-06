import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
 this.produitService.getProduits().subscribe(res => this.produits = res);
  }

  deleteProduit(produit: Produit): void {
    this.produitService.deleteProduit(produit.Id).subscribe(()=> {
      console.log('DELETE')
    });
  }
}
