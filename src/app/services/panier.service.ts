import { Injectable } from '@angular/core';
import {Produit} from "../interfaces/produit";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  produits: Produit[] = [];
  nbreArticlePanier = 0;

  constructor() { }

  ajouterPanier(produit : Produit) {
    this.produits.push(produit);
    this.nbreArticlePanier = this.produits.length;
  }

  getPanier() {
    return this.produits;
  }

  getNbreArticlePanier() {
    return this.nbreArticlePanier;
  }
}
