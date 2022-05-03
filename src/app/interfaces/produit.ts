import { Description } from "./description";
import { Stock } from "./stock";
import { Image } from "./image";
import { Tag } from "./tag";
import { Variant } from "./variant";
import { UUID } from 'angular2-uuid';

export interface Produit 
{
    Id:UUID;
    Name:string;
    Price:Number;
    Tva:Number;
    Description:Description;
    Stock:Stock;
    Images:Image[];
    Tags:Tag[];
    Variants:Variant[];
    DateAjout:Date;
    IsArchived:boolean;
}
