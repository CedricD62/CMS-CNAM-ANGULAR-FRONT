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
  produitsWithoutDuplicate!: Produit[]

  constructor(
    private panier: PanierService
  ) { }

  ngOnInit() {
    this.produits = this.panier.getPanier();
    this.produits = produits; //valeurs des produits mockés en attendant la page produit qui doit appeler la méthode ajouter au panier!
    this.produitsWithoutDuplicate = produits.filter((n,i) => produits.indexOf(n) === i)
  }

  getTotalTtc() {
    let somme = 0;
    this.produits.forEach(s => somme += this.getSsTotalHT(s.Id) + this.getTvaAmount(s.Id));
    return somme;
  }

  getTva() {
    let somme = 0;
    this.produits.forEach(s => somme += this.getTvaAmount(s.Id))
    return somme;
  }

  getTotalHt() {
    let somme = 0;
    this.produits.forEach(s => somme += this.getSsTotalHT(s.Id))
    return somme;
  }

  getQte(Id: string) {
    let produitQte = this.produits.filter(v => v.Id == Id);
    return produitQte.length;
  }

  getSsTotalHT(Id: string) {
    let produitQte = this.produits.filter(v => v.Id == Id);
    let somme = 0;
    produitQte.forEach(s => somme += s.Price.valueOf());
    return somme;
  }

  getSsTotalTTC(Id: string) {
        return this.getSsTotalHT(Id) + this.getTvaAmount(Id)
  }

  getTvaAmount(Id: string) {
    let produit = produits.filter(p => p.Id == Id);
    let tva = produit[0].Tva.valueOf()
    let priceProduit = this.getSsTotalHT(Id)
    return priceProduit / 100 * tva
  }

  removeProduct(Id: string) {
    if (produits.filter(p => p.Id == Id).length > 1){
      let produit = produits.filter(p => p.Id == Id);
      let index = produits.indexOf(produit[0]);
      produits.splice(index, 1)
    }
    else
    {
      let produit = produits.filter(p => p.Id == Id);
      let index = produits.indexOf(produit[0]);
      produits.splice(index, 1)
      let indexInNoDuplicate = this.produitsWithoutDuplicate.indexOf(produit[0])
      this.produitsWithoutDuplicate.splice(indexInNoDuplicate, 1)
    }

  }

  addProduct(Id: string) {
    let produit = produits.filter(p => p.Id == Id)
    produits.push(produit[0])
  }
}
