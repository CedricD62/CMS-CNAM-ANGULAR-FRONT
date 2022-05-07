import { Produit } from "./produit";

export interface Variant 
{
    id:string;
    name:string;
    descriptif:string;
    dateAjout:Date;
    isArchived:boolean;
    produits:Produit[];
}
