import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Produit } from "./produit";
import { UUID } from 'angular2-uuid';

export interface Image 
{
    id:string;
    name:string;
    information:string;
    url:string;
    dateAjout:Date;
    isArchived:boolean;
    produits:Produit[];
}
