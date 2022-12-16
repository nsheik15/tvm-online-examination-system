import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormSubmitService } from '../../services/form-submit.service';

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
