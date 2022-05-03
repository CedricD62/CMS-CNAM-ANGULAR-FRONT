import { Component, OnInit } from '@angular/core';
import {PanierService} from "../services/panier.service";
import {Produit} from "../interfaces/produit";
import {produits} from "../mocks/mock-products-panier";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  produits!: Produit[];

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.produits = this.panier.getPanier();
    this.produits = produits;
  }

  getTauxTVA() {
    return 20;
  }

  getTotalTtc() {
    let somme = 0;
    this.produits.forEach(s => somme += s.Price.valueOf());
    return somme;
  }

  getTva() {
    return this.getTotalTtc() / 100 * this.getTauxTVA();
  }

  getTotalHt() {
    return this.getTotalTtc() - this.getTva();
  }

  getQte(Id: string) {
    let produitQte = this.produits.filter(v => v.Id == Id);
    return produitQte.length;
  }

  getSsTotal(Id: string) {
    let produitQte = this.produits.filter(v => v.Id == Id);
    let somme = 0;
    console.log(produitQte)
    produitQte.forEach(s => somme += s.Price.valueOf());
    return somme;
  }
}
