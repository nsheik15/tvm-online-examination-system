import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training/training.component';
import { SharedModule } from '../shared/shared.module';
import { SelectStreamDialogComponent } from './select-stream-dialog/select-stream-dialog.component';


@NgModule({
  declarations: [TrainingComponent, SelectStreamDialogComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class TrainingModule { }
