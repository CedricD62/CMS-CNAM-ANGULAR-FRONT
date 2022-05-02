import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./stock-add/stock-add.module').then(m=>m.StockAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./stock-edit/stock-edit.module').then(m=>m.StockEditModule)
    }
];  