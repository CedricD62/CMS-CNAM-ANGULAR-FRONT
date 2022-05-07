import { Component, OnInit } from '@angular/core';
import { Description } from 'src/app/interfaces/description';
import { Produit } from 'src/app/interfaces/produit';
import { Stock } from 'src/app/interfaces/stock';
import { Image } from 'src/app/interfaces/image';
import { ProduitService } from 'src/app/services/produit.service';
import { Tag } from 'src/app/interfaces/tag';
import { Variant } from 'src/app/interfaces/variant';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.scss']
})
export class ProduitAddComponent implements OnInit {
  id!:string
  name!:string;
  price!:Number;
  tva!:Number;
  description!:Description;
  stock!: Stock;
  images!:Image[];
  tags!:Tag[];
  stickQ!:Number;
  variants!:Variant[];
  dateAjout!:Date;
  isArchived!:Boolean;

  constructor(
    private readonly produitService: ProduitService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void{

    const produit: Produit = {
      id : this.id,
      name: this.name,
      price: this.price,
      tva: this.tva,
      description: this.description,
      stock: this.stock,
      images: this.images,
      tags: this.tags,
      variants: this.variants,
      dateAjout: this.dateAjout,
      isArchived: false
    };
    
    this.produitService.createProduit(produit).subscribe(() =>{
      this.id;
      this.name;
      this.price;
      this.tva;
      this.description;
      this.stock;
      this.images = []
      this.tags = []
      this.variants;
      this.dateAjout;
      this.isArchived = false;
    });
  }
}
