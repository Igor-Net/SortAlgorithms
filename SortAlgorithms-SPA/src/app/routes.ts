import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SortComponent } from './sort/sort.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {
       path: 'home', component: HomeComponent
    },
    {
        path: 'sort', component: SortComponent
     },
     {
        path: 'algorithms', component: SortComponent, canActivate: [AuthGuard]
     },
     {
        path: '**', redirectTo: 'home', pathMatch: 'full'
     }
];