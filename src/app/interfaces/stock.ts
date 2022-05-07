import { Produit } from "./produit";

export interface Stock 
{
    id:string;
    produit:Produit;
    dateReapprovisionnement: Date;
    quantite:Number;

}
