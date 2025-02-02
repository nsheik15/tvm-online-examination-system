import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  { path: '', component: ResponseComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseRoutingModule { }
