import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormSubmitService } from 'src/app/shared/services/form-submit.service';

@Component({
  selector: 'exam-select-stream-dialog',
  templateUrl: './select-stream-dialog.component.html',
  styleUrls: ['./select-stream-dialog.component.scss']
})
export class SelectStreamDialogComponent implements OnInit {

  subjects = [
    'Java',
    'HTML, CSS & JS'
  ];
  selectedSubject = '';

  constructor(private router: Router, private submitSerivce: FormSubmitService) { }

  ngOnInit(): void {
  }

  submit() {
    localStorage.setItem('selectedSubject', this.selectedSubject);
    this.submitSerivce.onTrainingFinalSubmit().subscribe(
      (res: any) => console.log('res: ', res)
    );
  }
}
