import { Error404Component } from './main/errors/404/error-404.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { SampleComponent } from './main/sample/sample.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/auth/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'sample', component: SampleComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
