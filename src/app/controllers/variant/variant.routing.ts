import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./variant-add/variant-add.module').then(v=>v.VariantAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./variant-edit/variant-edit.module').then(v=>v.VariantEditModule)
    }
];  