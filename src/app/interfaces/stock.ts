import { Produit } from "./produit";

export interface Stock 
{
    Id:Number;
    Produit:Produit;
    DateReapprovisionnement: Date;
    Quantite:Number;

}
