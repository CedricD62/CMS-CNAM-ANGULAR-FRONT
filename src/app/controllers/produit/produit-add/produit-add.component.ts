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

  Name!:string;
  Price!:Number;
  Tva!:Number;
  Description!:Description;
  Stock!:Stock;
  Images!:Image[];
  Tags!:Tag[];
  Variants!:Variant[];
  DateAjout!:Date;
  EstActif!:boolean;

  constructor(
    private readonly produitService: ProduitService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const produit: Produit = {
      Name : this.Name,
      Description: this.Description,
      Images : this.Images,

    };
    
    this.produitService.createProduit(produit).subscribe(() =>{
      this.isCreated = true;
      this.Name = "";
      this.Description.;
    });
  }

}
