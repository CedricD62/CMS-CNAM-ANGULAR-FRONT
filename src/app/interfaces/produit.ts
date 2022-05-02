import { Description } from "./description";
import { Stock } from "./stock";
import { Image } from "./image";
import { Tag } from "./tag";
import { Variant } from "./variant";

export interface Produit 
{
    Id:Number;
    Name:string;
    Price:Number;
    Tva:Number;
    Description:Description;
    Strock:Stock;
    Images:Image[];
    Tags:Tag[];
    Variants:Variant[];
    DateAjout:Date;
    EstActif:boolean;
}
