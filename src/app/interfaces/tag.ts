import { Produit } from "./produit";

export interface Tag 
{
    Id:Number;
    Name:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
