import { FormSubmitService } from './../form-submit.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exam-instructions-dialog',
  templateUrl: './instructions-dialog.component.html',
  styleUrls: ['./instructions-dialog.component.scss']
})
export class InstructionsDialogComponent implements OnInit {

  subjects = [
    'Java',
    'C, C++',
    'HTML, CSS & JS'
  ];
  selectedSubject = '';

  constructor(private router: Router, private submitSerivce: FormSubmitService) { }

  ngOnInit(): void {
  }

  onStart() {
    localStorage.setItem('selectedSubject', this.selectedSubject);
    this.submitSerivce.isTimerStarted = true;
    this.router.navigate(['test']);
  }

}
