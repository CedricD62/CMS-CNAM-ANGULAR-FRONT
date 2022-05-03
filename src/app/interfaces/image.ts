import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Produit } from "./produit";
import { UUID } from 'angular2-uuid';

export interface Image 
{
    Id:UUID;
    Name:string;
    Information:string;
    Url:string;
    DateAjout:Date;
    EstActif:boolean;
    Produits:Produit[];
}
