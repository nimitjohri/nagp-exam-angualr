import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component'
import {dashboardRoutes} from './dashboard/dashboard-routing.module'
import {DashboardModule} from './dashboard/dashboard.module'
import { HttpClient, HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, children: [...dashboardRoutes]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
