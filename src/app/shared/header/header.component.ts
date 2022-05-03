import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nbreArticlesPanier : Number = 0;

  constructor(
    private panier : PanierService
  ) { }

  ngOnInit(): void {
  }

  majNbreArticlesPanier() {
    this.nbreArticlesPanier = this.panier.getNbreArticlePanier();
    return this.nbreArticlesPanier;
  }
}
