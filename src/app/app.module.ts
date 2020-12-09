import { QuestionPanelGuard } from './question-panel.guard';
import { FormGuard } from './form.guard';
import { RouteGuard } from './route.guard';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { RegisterComponent } from './register/register.component';
import { PanelComponent } from './panel/panel.component';
import { FrameComponent } from './frame/frame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { InstructionsDialogComponent } from './instructions-dialog/instructions-dialog.component';
import { ResponseComponent } from './response/response.component';
import { EndTestDialogComponent } from './end-test-dialog/end-test-dialog.component';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    RegisterComponent,
    PanelComponent,
    FrameComponent,
    InstructionsDialogComponent,
    ResponseComponent,
    EndTestDialogComponent,
    SubmitDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    RouteGuard,
    FormGuard,
    QuestionPanelGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
