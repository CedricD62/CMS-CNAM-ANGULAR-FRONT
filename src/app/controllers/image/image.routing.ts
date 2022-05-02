import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./image-add/image-add.module').then(m=>m.ImageAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./image-edit/image-edit.module').then(m=>m.ImageEditModule)
    }
];  