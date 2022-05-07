import { Customer } from "./customer";

export interface Payments {

    Id:string;
    Currency:string;
    orderId:string;
    Customer :Customer;
}
