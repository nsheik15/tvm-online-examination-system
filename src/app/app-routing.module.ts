import { ResponseComponent } from './response/response.component';
import { FormGuard } from './form.guard';
import { RouteGuard } from './route.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full'},
  { path: 'test', component: PanelComponent, canActivate: [RouteGuard]},
  /* { path: 'response', component: ResponseComponent }, */
  { path: '**', component: RegisterComponent, canDeactivate: [FormGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
