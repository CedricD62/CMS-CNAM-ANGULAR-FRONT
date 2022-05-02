import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Produit } from "./produit";

export interface Image 
{
    Id:Number;
    Name:string;
    Information:string;
    Url:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
