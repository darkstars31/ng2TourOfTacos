import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TacoComponent } from './taco.component';
import { DashboardComponent } from './dashboard.component';
import { TacoDetailComponent } from './taco-detail.component'
import { TacoService } from './taco.service';

@NgModule({
  declarations: [
    AppComponent,
    TacoComponent,
    TacoDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      {        path: '',                  redirectTo: '/dashboard',        pathMatch: 'full'      },
      {        path: 'tacos',             component: TacoComponent       }, 
      {        path: 'dashboard',         component: DashboardComponent    }, 
      {        path: 'detail/:id',        component: TacoDetailComponent      }
    ]),
    FormsModule
  ],
  providers: [
    TacoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
