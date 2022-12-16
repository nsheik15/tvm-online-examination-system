import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import { QuestionPanelGuard } from './guard/question-panel.guard';
import { SharedModule } from '../shared/shared.module';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    SubmitDialogComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ],
  providers: [
    QuestionPanelGuard
  ]
})
export class TestModule { }
