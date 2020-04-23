import { ContactComponent } from './contact/contact.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'porfolio',
    loadChildren: () => import('./porfolio/porfolio.module').then(m => m.PorfolioModule),
},
{
    path: 'about',
    component: AboutComponent
},
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
