import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { EndTestDialogComponent } from './components/end-test-dialog/end-test-dialog.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  TitleComponent,
  EndTestDialogComponent
];

const modules = [
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    components,
    modules
  ]
})
export class SharedModule { }
