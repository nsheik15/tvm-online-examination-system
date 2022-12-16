import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { InstructionsDialogComponent } from './instructions-dialog/instructions-dialog.component';
import { FormGuard } from './guard/form.guard';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    InstructionsDialogComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ],
  providers: [
    FormGuard
  ]
})
export class RegisterModule { }
