import { Produit } from "./produit";

export interface Tag
{
    Id:string;
    Name:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
