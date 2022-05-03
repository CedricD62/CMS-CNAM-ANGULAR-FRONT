import { Produit } from "./produit";

export interface Stock
{
    Id:string;
    Produit:Produit;
    DateReapprovisionnement: Date;
    DateModification:Date;
    Quantite:Number;

}
