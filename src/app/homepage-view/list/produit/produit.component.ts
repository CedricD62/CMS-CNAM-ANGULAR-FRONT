import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  @Input() produitModel!: Produit;
  @Output() delete: EventEmitter<Produit>= new EventEmitter();
  produit!: Produit;
  constructor() { }

  ngOnInit(): void {
    this.produit = this.produitModel;
  }

  onClick():void{
    this.delete.emit(this.produit);
  }
}