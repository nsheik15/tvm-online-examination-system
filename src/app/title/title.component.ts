import { Router } from '@angular/router';
import { EndTestDialogComponent } from './../end-test-dialog/end-test-dialog.component';
import { FormSubmitService } from './../form-submit.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'exam-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Output() navEmitter: EventEmitter<boolean> = new EventEmitter();

  user = 'User';
  time = new Date();
  isTimerStarted = false;
  isTimerStopped = false;
  mm = 29;
  ss = 59;
  currentRoute = '';

  constructor(private submitService: FormSubmitService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let formVal = this.submitService.getRegistrationFormValues();
    let getMin = this.submitService.getLocalSyncTime();

    if (formVal) {
      let formObj = JSON.parse(formVal);
      this.user = formObj.name;
    }

    if (getMin) {
      this.mm = parseInt(getMin);
      this.isTimerStarted = true;
      // this.startTimer();
    }

    setInterval(() => {
      this.time = new Date();
      // console.log(this.time);
      this.startTimer();
    }, 1000);

    this.startTimer();

    this.currentRoute = this.router.url;

  }

  startTimer() {

    if (!this.isTimerStarted) {
      this.isTimerStarted = this.submitService.isTimerStarted;
    } else {
      this.isTimerStarted = this.submitService.isTimerStarted;
    }

    if (this.isTimerStarted) {
      // console.log(this.mm);
      if (this.mm > -1) {
        // console.log(this.mm);
        if (this.mm < 25) {
          this.submitService.isAppearSubmit = true;
        }
        if (this.ss !== 0) {
          this.ss--;
        } else if (this.mm > -1) {
          this.mm--;
          this.submitService.timeSyncLocal(this.mm);
          this.ss = 59;
        }
      } else {
        if (!this.isTimerStopped) {
          this.submitService.isSubmit = true;
          this.submitService.isAppearSubmit = false;
          this.submitService.onFinalSubmit().subscribe(
            data => console.log('data: ', data)
          );
          this.isTimerStopped = true;
          this.submitService.isTimerStarted = false;
          this.isTimerStarted = false;
        }
      }
    }

    /* setTimeout(() => {
      if (!this.isTimerStarted) {
        this.isTimerStarted = this.submitService.isTimerStarted;
        this.startTimer();
      } else {
        this.isTimerStarted = this.submitService.isTimerStarted;
        console.log('Timer Started!');
        this.startTimer();
      }
    }, 1000); */

  }

  onNavClick() {
    this.navEmitter?.emit(true);
  }

  onEndTest() {
    const endTestDialogRef = this.dialog.open(EndTestDialogComponent);

    endTestDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.submitService.removeAll();
        this.submitService.isTimerStarted = false;
        this.router.navigate(['']);
        this.snackBar.open('The test has been ended!', 'close', {
          duration: 3000
        });
      }
    });
  }

}
