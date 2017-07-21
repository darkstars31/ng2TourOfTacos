import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard.component';
import { TacoComponent }      from './taco.component';
import { TacoDetailComponent }  from './taco-detail.component';

const routes: Routes = [
     {        path: '',                  redirectTo: '/dashboard',        pathMatch: 'full'      },
      {        path: 'tacos',             component: TacoComponent       }, 
      {        path: 'dashboard',         component: DashboardComponent    }, 
      {        path: 'detail/:id',        component: TacoDetailComponent      }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule{}