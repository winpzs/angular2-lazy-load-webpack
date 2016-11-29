import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { FormComponent } from './form.component';
import { TableComponent } from './table.component';

//HomeComponent已经在app.module导入？
export const routeDeclarations = [
    FormComponent,
    TableComponent
];

const routes: Routes = [
    {
        path: '',
        component: TableComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'page',
        loadChildren:'./page/page.module#PageModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);