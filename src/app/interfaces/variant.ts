import { Produit } from "./produit";

export interface Variant 
{
    Id:string;
    Name:string;
    Descriptif:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
