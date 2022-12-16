import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FrameComponent } from './layout/frame/frame.component';
import { RouteGuard } from './guard/route.guard';
import { RouterModule } from '@angular/router';

const component = [
  FrameComponent
]

@NgModule({
  declarations: [
    component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    component
  ],
  providers: [
    RouteGuard
  ]
})
export class CoreModule { }
