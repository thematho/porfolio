import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { ContactComponent } from './contact.component';

export const moduleRoutes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    },
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(moduleRoutes);