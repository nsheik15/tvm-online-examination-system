import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './core/guard/route.guard';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full'},
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule), canActivate: [RouteGuard]},
  { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)},
  { path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)},
  // { path: 'response', loadChildren: () => import('./response/response.module').then(m => m.ResponseModule)},
  { path: '**',  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
