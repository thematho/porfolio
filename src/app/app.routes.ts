import { PorfolioComponent } from './porfolio/porfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'porfolio',
        component: PorfolioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
];

export default appRoutes;