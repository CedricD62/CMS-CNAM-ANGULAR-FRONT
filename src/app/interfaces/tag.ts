import { Produit } from "./produit";

export interface Tag 
{
    id:string;
    name:string;
    dateAjout:Date;
    isArchived:boolean;
    produits:Produit[];
}
