import { Router } from '@angular/router';
import { FormSubmitService } from './../form-submit.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'exam-end-test-dialog',
  templateUrl: './end-test-dialog.component.html',
  styleUrls: ['./end-test-dialog.component.scss']
})
export class EndTestDialogComponent implements OnInit {

  constructor(private submitService: FormSubmitService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
