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
  Id!:string
  Name!:string;
  Price!:Number;
  Tva!:Number;
  Description!:Description;
  Stock!:Stock;
  Images!:Image[];
  Tags!:Tag[];
  Variants!:Variant[];
  DateAjout!:Date;
  IsArchived!:Boolean
  isCreated = false;

  constructor(
    private readonly produitService: ProduitService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void{

    const produit: Produit = {
      Id : this.Id,
      Name: this.Name,
      Price: this.Price,
      Tva: this.Tva,
      Description: this.Description,
      Stock: this.Stock,
      Images: this.Images,
      Tags: this.Tags,
      Variants: this.Variants,
      DateAjout: this.DateAjout,
      IsArchived: false
    };

    this.produitService.createProduit(produit).subscribe(() =>{
      this.Name;
      this.Price;
      this.Tva;
      this.Description;
      this.Stock;
      this.Images = []
      this.Tags = []
      this.Variants;
      this.DateAjout;
      this.IsArchived = false;
    });
  }
}
