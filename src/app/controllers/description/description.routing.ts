import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./description-add/description-add.module').then(m=>m.DescriptionAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./description-edit/description-edit.module').then(m=>m.DescriptionEditModule)
    }
];  