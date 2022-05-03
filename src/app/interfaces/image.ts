
import { Produit } from "./produit";

export interface Image
{
    Id:string;
    Name:string;
    Information:string;
    Url:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
