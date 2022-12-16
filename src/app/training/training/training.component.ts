import { DatePipe } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormSubmitService } from 'src/app/shared/services/form-submit.service';
import { SelectStreamDialogComponent } from '../select-stream-dialog/select-stream-dialog.component';
import { MyErrorStateMatcher } from './my-error-state-matcher';

@Component({
  selector: 'exam-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  title = 'Start your training';
  trainingForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  pageNo = 1;
  isSubmit = false;
  tempDob = '';
  semesterList = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ];

  get name() {
    return this.trainingForm.get('name');
  }

  get email() {
    return this.trainingForm.get('email');
  }

  get mobileNo() {
    return this.trainingForm.get('mobileNo');
  }

  get dob() {
    return this.trainingForm.get('dob');
  }

  get registerNumber() {
    return this.trainingForm.get('registerNumber');
  }

  get collegeName() {
    return this.trainingForm.get('collegeName');
  }

  get course() {
    return this.trainingForm.get('course');
  }

  get department() {
    return this.trainingForm.get('department');
  }

  get semester() {
    return this.trainingForm.get('semester');
  }

  @HostListener('window:beforeunload', ['$event']) beforeUnloadHander(event: any) {
    if (!this.isSubmit){
      return false;
    }
    else{
      return true;
    }
  }

  constructor(private fb: FormBuilder, private dialog: MatDialog, private submit: FormSubmitService, private datePipe: DatePipe) {

    this.trainingForm = this.fb.group({
      name: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.email ]],
      mobileNo: ['', [ Validators.required, Validators.pattern('^((\\+91-?)|0)?[6-9][0-9]{9}$') ]],
      dob: ['', [ Validators.required ]],
      registerNumber: ['', [ Validators.required ]],
      collegeName: [''],
      course: [''],
      department: [''],
      semester: ['']
    });
  }

  ngOnInit(): void {
    let formValues = this.submit.getTrainingFormValues();

    if (formValues) {
      let formObject = JSON.parse(formValues);
      // console.log(formObject);

      this.trainingForm.setValue(formObject);
    }

    /* const shuffled = arrayShuffle(this.semesterList);
    console.log(shuffled); */

  }

  onNext() {
    this.pageNo = 2;
  }

  onPrev() {
    this.pageNo = 1;
  }

  onSubmit() {
    this.tempDob = this.dob?.value;
    const dobDate = new Date(this.tempDob);
    const dobFilteredDate = this.datePipe.transform(dobDate, 'dd-MM-yyyy');
    const dobString = dobFilteredDate?.toString();
    let isCancelled = true;
    this.trainingForm.patchValue({
      dob: dobString
    });
    this.isSubmit = true;
    this.submit.onTrainingFormSubmit(this.trainingForm.value);
    const instructionsDialogRef = this.dialog.open(SelectStreamDialogComponent);

    instructionsDialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        isCancelled = result;
      }

      if (isCancelled) {
        this.trainingForm.patchValue({
          dob: this.tempDob
        });
      }
    });
  }
}
