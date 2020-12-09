import { FormSubmitService } from './../form-submit.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exam-instructions-dialog',
  templateUrl: './instructions-dialog.component.html',
  styleUrls: ['./instructions-dialog.component.scss']
})
export class InstructionsDialogComponent implements OnInit {

  constructor(private router: Router, private submitSerivce: FormSubmitService) { }

  ngOnInit(): void {
  }

  onStart() {
    this.submitSerivce.isTimerStarted = true;
    this.router.navigate(['test']);
  }

}
