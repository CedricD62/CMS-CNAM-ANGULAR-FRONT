import { Description } from "./description";
import { Stock } from "./stock";
import { Image } from "./image";
import { Tag } from "./tag";
import { Variant } from "./variant";
import { UUID } from 'angular2-uuid';

export interface Produit 
{
    id:string;
    name:string;
    price:Number;
    tva:Number;
    description:Description;
    stock:Stock;
    images:Image[];
    tags:Tag[];
    variants:Variant[];
    dateAjout:Date;
    isArchived:boolean;
}
