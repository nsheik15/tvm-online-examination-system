import { FormSubmitService } from './../form-submit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exam-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss']
})
export class SubmitDialogComponent implements OnInit {

  constructor(private submitService: FormSubmitService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitService.isTimerStarted = false;
    this.submitService.isAppearSubmit = false;
    this.submitService.onFinalSubmit().subscribe(
      data => console.log('data: ', data)
    );
  }

}
