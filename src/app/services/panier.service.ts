import { Injectable } from '@angular/core';
import {ProduitId} from "../appInterfaces/produits/Produit";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  produits: ProduitId[] = [];
  nbreArticlePanier = 0;

  constructor() { }

  ajouterPanier(idProduit : ProduitId) {
    this.produits.push(idProduit);
    this.nbreArticlePanier = this.produits.length;
  }

  getPanier() {
    return this.produits;
  }

  getNbreArticlePanier() {
    return this.nbreArticlePanier;
  }
}
