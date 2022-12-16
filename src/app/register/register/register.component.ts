import { MyErrorStateMatcher } from './my-error-state-matcher';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';/*
import arrayShuffle from 'array-shuffle'; */
import { FormSubmitService } from 'src/app/shared/services/form-submit.service';
import { InstructionsDialogComponent } from '../instructions-dialog/instructions-dialog.component';

@Component({
  selector: 'exam-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
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
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get mobileNo() {
    return this.registrationForm.get('mobileNo');
  }

  get dob() {
    return this.registrationForm.get('dob');
  }

  get registerNumber() {
    return this.registrationForm.get('registerNumber');
  }

  get collegeName() {
    return this.registrationForm.get('collegeName');
  }

  get course() {
    return this.registrationForm.get('course');
  }

  get department() {
    return this.registrationForm.get('department');
  }

  get semester() {
    return this.registrationForm.get('semester');
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

    this.registrationForm = this.fb.group({
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
    let formValues = this.submit.getRegistrationFormValues();

    if (formValues) {
      let formObject = JSON.parse(formValues);
      // console.log(formObject);

      this.registrationForm.setValue(formObject);
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
    this.registrationForm.patchValue({
      dob: dobString
    });
    this.isSubmit = true;
    this.submit.onRegistrationFormSubmit(this.registrationForm.value);
    const instructionsDialogRef = this.dialog.open(InstructionsDialogComponent);

    instructionsDialogRef.afterClosed().subscribe(result => {

      if (result !== undefined) {
        isCancelled = result;
      }

      if (isCancelled) {
        this.registrationForm.patchValue({
          dob: this.tempDob
        });
      }
    });
  }

}
