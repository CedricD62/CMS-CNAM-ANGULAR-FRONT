import { Routes } from "@angular/router";

export const routes: Routes = 
[
    {
        path: '',
        loadChildren: () => import('./homepage-view/homepage-view.module').then(m => m.HomepageViewModule)
    },
    {
        path: 'produit',
        loadChildren: () => import('./controllers/produit/produit.module').then(m =>m.ProduitModule)
    },
    {
        path: 'image',
        loadChildren: () => import('./controllers/image/image.module').then(m =>m.ImageModule)
    },
    {
        path: 'stock',
        loadChildren: () => import('./controllers/stock/stock.module').then(m =>m.StockModule)
    },
    {
        path: 'description',
        loadChildren: () => import('./controllers/description/description.module').then(m =>m.DescriptionModule)
    },
    {
        path: 'tag',
        loadChildren: () => import('./controllers/tag/tag.module').then(m =>m.TagModule)
    },
    {
        path: 'variant',
        loadChildren: () => import('./controllers/variant/variant.module').then(m =>m.VariantModule)
    }
];