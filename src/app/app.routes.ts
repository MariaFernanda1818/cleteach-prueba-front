import { Routes } from '@angular/router';
import { ListadoRegistroComponent } from './modules/listado-registro/listado-registro.component';

export const APP_ROUTES: Routes = [
    {
        path: 'listado-registro',
        component: ListadoRegistroComponent,
        loadChildren: () => import('./modules/listado-registro/listado-registro.module').then((m) => m.ListadoRegistroModule),
    },
    { path: '**', redirectTo: 'listado-registro', pathMatch: 'full' },
];
