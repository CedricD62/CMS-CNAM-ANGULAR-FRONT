import { Produit } from "./produit";

export interface Variant 
{
    Id:Number;
    Name:string;
    Descriptif:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
