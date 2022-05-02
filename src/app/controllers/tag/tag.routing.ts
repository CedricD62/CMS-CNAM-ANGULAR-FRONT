import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./tag-add/tag-add.module').then(m=>m.TagAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./tag-edit/tag-edit.module').then(m=>m.TagEditModule)
    }
];  