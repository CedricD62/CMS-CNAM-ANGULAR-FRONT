import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./produit-add/produit-add.module').then(m=>m.ProduitAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./produit-edit/produit-edit.module').then(m=>m.ProduitEditModule)
    }
];  