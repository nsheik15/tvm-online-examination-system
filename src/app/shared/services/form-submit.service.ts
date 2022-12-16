import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {

  isTimerStarted = false;
  isAppearSubmit = false;
  isSubmit = false;
  submitUrl = 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSf69T8FOh6cw5TyvltoROfJUkYovGRwQ6J-ekYJQLjLg9ewjQ/formResponse';
  registerUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGZmrRdXYZRsrvHp7EmXixjMvOpGIHkRGsdSV6cJTlDz0BwQ/formResponse';

  constructor(private _http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  onRegistrationFormSubmit(formVal: FormGroup) {
    localStorage.setItem('Registration Form Values', JSON.stringify(formVal));
  }

  onTrainingFormSubmit(formVal: FormGroup) {
    localStorage.setItem('Training Form Values', JSON.stringify(formVal));
  }

  getRegistrationFormValues() {
    return localStorage.getItem('Registration Form Values');
  }

  getTrainingFormValues() {
    return localStorage.getItem('Training Form Values');
  }

  onAnswerSubmit(ansVal: FormGroup) {
    localStorage.setItem('Answer Values', JSON.stringify(ansVal));
  }

  getAnswerValues() {
    return localStorage.getItem('Answer Values');
  }

  timeSyncLocal(min: number) {
    localStorage.setItem('Minutes', min.toString());
  }

  getLocalSyncTime() {
    return localStorage.getItem('Minutes');
  }

  removeAll() {
    localStorage.removeItem('Registration Form Values');
    localStorage.removeItem('Answer Values');
    localStorage.removeItem('Minutes');
    localStorage.removeItem('selectedSubject');
  }

  onFinalSubmit() {
    const formVal = this.getRegistrationFormValues();
    const ansVal = this.getAnswerValues();
    let subject: any = localStorage.getItem('selectedSubject');

    if (formVal && ansVal) {
      var formObj = JSON.parse(formVal);
      var ansObj = JSON.parse(ansVal);
    }

    /* console.log(formObj);
    console.log(ansObj); */

    const params = new HttpParams()
    .set('entry.1400778455', formObj.name)
    .set('entry.664611739', formObj.email)
    .set('entry.1614914356', formObj.mobileNo)
    .set('entry.386516990', formObj.dob)
    .set('entry.141525823', formObj.registerNumber)
    .set('entry.1498261377', formObj.collegeName)
    .set('entry.930491569', formObj.course)
    .set('entry.1209870943', formObj.department)
    .set('entry.1912880602', formObj.semester)
    .set('entry.1690948208', ansObj.q1)
    .set('entry.267141237', ansObj.q2)
    .set('entry.668768225', ansObj.q3)
    .set('entry.1893064650', ansObj.q4)
    .set('entry.2095745514', ansObj.q5)
    .set('entry.404900923', ansObj.q6)
    .set('entry.717348614', ansObj.q7)
    .set('entry.1397087128', ansObj.q8)
    .set('entry.2023982864', ansObj.q9)
    .set('entry.1686201000', ansObj.q10)
    .set('entry.1449273992', ansObj.q11)
    .set('entry.2077470756', ansObj.q12)
    .set('entry.1450867469', ansObj.q13)
    .set('entry.690586118', ansObj.q14)
    .set('entry.1615339208', ansObj.q15)
    .set('entry.1148975703', ansObj.q16)
    .set('entry.1643880479', ansObj.q17)
    .set('entry.553164627', ansObj.q18)
    .set('entry.563908702', ansObj.q19)
    .set('entry.491383373', ansObj.q20)
    .set('entry.300625360', ansObj.q21)
    .set('entry.51058296', ansObj.q22)
    .set('entry.1196813759', ansObj.q23)
    .set('entry.1804868743', ansObj.q24)
    .set('entry.1529612075', ansObj.q25)
    .set('entry.536451521', ansObj.q26)
    .set('entry.401940602', ansObj.q27)
    .set('entry.1220053150', ansObj.q28)
    .set('entry.142852753', ansObj.q29)
    .set('entry.541722642', ansObj.q30)
    .set('entry.1406113011', subject);

    const fullUrl = `${this.submitUrl}?${params.toString()}`;

    this.removeAll();
    this.router.navigate(['']);

    this.snackBar.open('Submitted Successfully!', 'close', {
      duration: 3000
    });

    return this._http.get(fullUrl);
  }

  onTrainingFinalSubmit() {
    const formVal = this.getTrainingFormValues();
    let subject: any = localStorage.getItem('selectedSubject');

    if (!!formVal) {
      var formObj = JSON.parse(formVal);
    }

    const params = new HttpParams()
      .set('entry.1062783463', formObj.name)
      .set('entry.1791261219', formObj.email)
      .set('entry.880424355', formObj.mobileNo)
      .set('entry.2002783294', formObj.dob)
      .set('entry.1268818821', formObj.registerNumber)
      .set('entry.740581699', formObj.collegeName)
      .set('entry.775735126', formObj.course)
      .set('entry.1319100450', formObj.department)
      .set('entry.1687273167', formObj.semester)
      .set('entry.1796606942', subject);

      const fullUrl = `${this.registerUrl}?${params.toString()}`;

      this.removeAll();
      this.router.navigate(['/training']);

      this.snackBar.open('Submitted Successfully!', 'close', {
        duration: 3000
      });

      return this._http.get(fullUrl);
  }

}
