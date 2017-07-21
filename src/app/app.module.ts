import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { TacoComponent } from './taco.component';
import { DashboardComponent } from './dashboard.component';
import { TacoDetailComponent } from './taco-detail.component'
import { TacoService } from './taco.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TacoComponent,
    TacoDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule
  ],
  providers: [
    TacoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
