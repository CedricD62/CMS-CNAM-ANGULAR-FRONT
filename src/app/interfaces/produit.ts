import { Description } from "./description";
import { Stock } from "./stock";
import { Image } from "./image";
import { Tag } from "./tag";
import { Variant } from "./variant";

export interface Produit
{
    Id:string;
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
