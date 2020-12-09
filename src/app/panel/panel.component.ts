import { SubmitDialogComponent } from './../submit-dialog/submit-dialog.component';
import { FormSubmitService } from './../form-submit.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'exam-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  active = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  visited = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  answered = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  currActive = 1;
  questionForm: FormGroup;
  visitedCount = 0;
  unvisitedCount = 0;
  answeredCount = 0;
  unansweredCount = 0;
  isSubmit = false;
  isSubmitAppears = false;

  question = [
    'Why we use array as a parameter of main method?',
    'Can we declare abstract static method?',
    'Which of these is necessary condition for automatic type conversion in Java?',
    'What is the prototype of the default constructor of this Java class?',
    'Floating-point value assigned to an integer type?',
    'Which component is responsible to optimize byte code into machine code?',
    'Invalid identifier with main method is?',
    'What is the extension of compiled java classes?',
    'Which keyword is used for a class which has been declared final?',
    'If we remove static modifier from main method of the program what is the output of the program?',
    'Which of the following is wrong sentence to unreferenced the object?',
    'What will be the output of the following code?',
    'By default except static method all the methods in java is?',
    'Which interface is control over serialization and deserialization?',
    'Which of the following has the highest memory management',
    'When a class extends the Thread class, it should override ………………… method of thread class to start that thread.',
    'Which of the following constructor of class Thread is valid one?',
    'How does java enables high performance?',
    'Which keyword references other classes in java?',
    'Select invalid method of string class?',
    'Can we print or execute something without using main method?',
    'Which of the following statement is wrong?',
    'Which one is the name of memory location?',
    'Inter-thread communication is used to avoid thread pooling?',
    'Which method is used to mark the thread daemon thread or a user thread?',
    'Which is the base class of all java classes?',
    'Can an interface implement another interface?',
    'An Interface which doesn’t have any declaration inside but enforces a mechanism?',
    'Method which is implemented in a language other than java is?',
    '	……………………  is used to find and fix bugs in the java program?'
  ];

  op1 = ['It is syntax', 'It can store multiple values', 'Both of above ', 'None of above'];
  op2 = ['Yes', 'No'];
  op3 = ['The destination type is smaller than source type', 'The destination type is larger than source type', 'The destination type can be larger or smaller than source type', 'None of the mentioned'];
  op4 = ['prototype( )', 'prototype(void)', 'public prototype(void)', 'public prototype( )'];
  op5 = ['Type Convention', 'Cascading', 'Truncation', 'Wrapping'];
  op6 = ['JVM', 'JRE', 'JDK', 'JIT'];
  op7 = ['Static', 'Default', 'Private', 'protected'];
  op8 = ['.js', '.text', '.java', '.class'];
  op9 = ['Final', 'Static', 'Abstract'];
  op10 = ['Compilation error', 'Program runs fine', 'No Such Method Error', 'None of the above'];
  op11 = ['By nulling the reference', 'By assigning one reference to another ', 'By Using Object.newInstance() method', 'By anonymous Object method'];
  op12 = ['1', '0', 'Compilation Error', 'EnumNotDefeinedException'];
  op13 = ['Default methods', 'Public methods', 'Virtual methods', 'Instance methods'];
  op14 = ['FileFilter', 'Serializable', 'Externalization', 'ObjectInput'];
  op15 = ['Heap', 'Java Virtual Machine', 'Stack Memory', 'String constant pool'];
  op16 = ['start()', 'run()', 'init()', 'go()'];
  op17 = ['Thread(Runnable threadobject, int priority)', 'Thread(init priority)', 'Thread(Runnable threadObject, String threadName)', 'Thread(String threadName, int priority)', 'None of these'];
  op18 = ['Using Java Virtual Machine', 'Using Just In Time Compiler', 'Using  Java Development Kit', 'None of the above'];
  op19 = ['implements', 'extends', 'import', 'interface'];
  op20 = ['toUpperCase()', 'toLowerCase()', 'equalsIgnore()', 'None of the above'];
  op21 = ['Yes', 'No'];
  op22 = ['Interface has only static and final variables', 'Abstract class can have static methods main method and constructor', 'Abstract class support multiple inheritance by default', 'Interface have only abstract methods'];
  op23 = ['Heap memory', 'Static container', 'Variable', 'JVM'];
  op24 = ['True', 'False'];
  op25 = ['isDaemon()', 'setDaemon()', 'daemon()', 'createDaemon()'];
  op26 = ['java.object', 'java.lang.object', 'java.utill', 'java.class.object'];
  op27 = ['Yes', 'No'];
  op28 = ['Nested interface', 'Multiple Interface', 'Marker Interface', 'None of the above'];
  op29 = ['Static methods', 'Default methods', 'Native methods', 'None of the above'];
  op30 = ['JVM', 'JRE', 'JDK', 'JDB'];

  get q1() {
    return this.questionForm.get('q1');
  }
  get q2() {
    return this.questionForm.get('q2');
  }
  get q3() {
    return this.questionForm.get('q3');
  }
  get q4() {
    return this.questionForm.get('q4');
  }
  get q5() {
    return this.questionForm.get('q5');
  }
  get q6() {
    return this.questionForm.get('q6');
  }
  get q7() {
    return this.questionForm.get('q7');
  }
  get q8() {
    return this.questionForm.get('q8');
  }
  get q9() {
    return this.questionForm.get('q9');
  }
  get q10() {
    return this.questionForm.get('q10');
  }
  get q11() {
    return this.questionForm.get('q11');
  }
  get q12() {
    return this.questionForm.get('q12');
  }
  get q13() {
    return this.questionForm.get('q13');
  }
  get q14() {
    return this.questionForm.get('q14');
  }
  get q15() {
    return this.questionForm.get('q15');
  }
  get q16() {
    return this.questionForm.get('q16');
  }
  get q17() {
    return this.questionForm.get('q17');
  }
  get q18() {
    return this.questionForm.get('q18');
  }
  get q19() {
    return this.questionForm.get('q19');
  }
  get q20() {
    return this.questionForm.get('q20');
  }
  get q21() {
    return this.questionForm.get('q21');
  }
  get q22() {
    return this.questionForm.get('q22');
  }
  get q23() {
    return this.questionForm.get('q23');
  }
  get q24() {
    return this.questionForm.get('q24');
  }
  get q25() {
    return this.questionForm.get('q25');
  }
  get q26() {
    return this.questionForm.get('q26');
  }
  get q27() {
    return this.questionForm.get('q27');
  }
  get q28() {
    return this.questionForm.get('q28');
  }
  get q29() {
    return this.questionForm.get('q29');
  }
  get q30() {
    return this.questionForm.get('q30');
  }

  @HostListener('window:beforeunload', ['$event']) beforeUnloadHander(event: any) {
    if (!this.isSubmit){
      return false;
    }
    else{
      return true;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      if (this.currActive !== 1) {
        this.onPrev();
      }
    } else if (event.key === 'ArrowRight') {
      if (this.currActive !== 30) {
        this.onNext();
      }
    }
  }

  constructor(private fb: FormBuilder, private submitService: FormSubmitService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.questionForm = this.fb.group({
      q1: [''],
      q2: [''],
      q3: [''],
      q4: [''],
      q5: [''],
      q6: [''],
      q7: [''],
      q8: [''],
      q9: [''],
      q10: [''],
      q11: [''],
      q12: [''],
      q13: [''],
      q14: [''],
      q15: [''],
      q16: [''],
      q17: [''],
      q18: [''],
      q19: [''],
      q20: [''],
      q21: [''],
      q22: [''],
      q23: [''],
      q24: [''],
      q25: [''],
      q26: [''],
      q27: [''],
      q28: [''],
      q29: [''],
      q30: [''],
    });
  }

  ngOnInit(): void {
    this.snackBar.open('Registration Successful!', 'close', {
      duration: 3000
    });
    this.findUnvisitedCount();
    let ansVal = this.submitService.getAnswerValues();

    if (ansVal) {
      let ansObj = JSON.parse(ansVal);

      this.questionForm.setValue(ansObj);
    }

    setInterval(() => {
      if (!this.isSubmitAppears) {
        this.isSubmitAppears = this.submitService.isAppearSubmit;
      } else {
        this.isSubmitAppears = this.submitService.isAppearSubmit;
        // console.log(this.isSubmitAppears);
      }
    }, 1000);

  }

  findUnvisitedCount() {
    if (!this.visited[this.currActive - 1]) {
      this.unvisitedCount = 29 - this.visitedCount;
    } else {
      this.unvisitedCount = 30 - this.visitedCount;
    }
    this.findUnansweredCount();
  }

  findUnansweredCount() {
    this.unansweredCount = this.visitedCount - this.answeredCount;
  }

  setVisitedAnswered() {
    this.active[this.currActive - 1] = false;
    let currVal = this.currQuestionValue();
    if (currVal === '') {
      this.visited[this.currActive - 1] = true;
      this.visitedCount = this.visited.filter(Boolean).length;
      this.answeredCount = this.answered.filter(Boolean).length;
    } else {
      this.answered[this.currActive - 1] = true;
      this.answeredCount = this.answered.filter(Boolean).length;
      this.visited[this.currActive - 1] = true;
      this.visitedCount = this.visited.filter(Boolean).length;
    }
  }

  currQuestionValue() {
    if (this.currActive === 1) {
      return this.q1?.value;
    } else if (this.currActive === 2) {
      return this.q2?.value;
    } else if (this.currActive === 3) {
      return this.q3?.value;
    } else if (this.currActive === 4) {
      return this.q4?.value;
    } else if (this.currActive === 5) {
      return this.q5?.value;
    } else if (this.currActive === 6) {
      return this.q6?.value;
    } else if (this.currActive === 7) {
      return this.q7?.value;
    } else if (this.currActive === 8) {
      return this.q8?.value;
    } else if (this.currActive === 9) {
      return this.q9?.value;
    } else if (this.currActive === 10) {
      return this.q10?.value;
    } else if (this.currActive === 11) {
      return this.q11?.value;
    } else if (this.currActive === 12) {
      return this.q12?.value;
    } else if (this.currActive === 13) {
      return this.q13?.value;
    } else if (this.currActive === 14) {
      return this.q14?.value;
    } else if (this.currActive === 15) {
      return this.q15?.value;
    } else if (this.currActive === 16) {
      return this.q16?.value;
    } else if (this.currActive === 17) {
      return this.q17?.value;
    } else if (this.currActive === 18) {
      return this.q18?.value;
    } else if (this.currActive === 19) {
      return this.q19?.value;
    } else if (this.currActive === 20) {
      return this.q20?.value;
    } else if (this.currActive === 21) {
      return this.q21?.value;
    } else if (this.currActive === 22) {
      return this.q22?.value;
    } else if (this.currActive === 23) {
      return this.q23?.value;
    } else if (this.currActive === 24) {
      return this.q24?.value;
    } else if (this.currActive === 25) {
      return this.q25?.value;
    } else if (this.currActive === 26) {
      return this.q26?.value;
    } else if (this.currActive === 27) {
      return this.q27?.value;
    } else if (this.currActive === 28) {
      return this.q28?.value;
    } else if (this.currActive === 29) {
      return this.q29?.value;
    } else if (this.currActive === 30) {
      return this.q30?.value;
    }
  }

  on1() {
    this.setVisitedAnswered();
    this.currActive = 1;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on2() {
    this.setVisitedAnswered();
    this.currActive = 2;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on3() {
    this.setVisitedAnswered();
    this.currActive = 3;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on4() {
    this.setVisitedAnswered();
    this.currActive = 4;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on5() {
    this.setVisitedAnswered();
    this.currActive = 5;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on6() {
    this.setVisitedAnswered();
    this.currActive = 6;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on7() {
    this.setVisitedAnswered();
    this.currActive = 7;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on8() {
    this.setVisitedAnswered();
    this.currActive = 8;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on9() {
    this.setVisitedAnswered();
    this.currActive = 9;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on10() {
    this.setVisitedAnswered();
    this.currActive = 10;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on11() {
    this.setVisitedAnswered();
    this.currActive = 11;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on12() {
    this.setVisitedAnswered();
    this.currActive = 12;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on13() {
    this.setVisitedAnswered();
    this.currActive = 13;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on14() {
    this.setVisitedAnswered();
    this.currActive = 14;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on15() {
    this.setVisitedAnswered();
    this.currActive = 15;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on16() {
    this.setVisitedAnswered();
    this.currActive = 16;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on17() {
    this.setVisitedAnswered();
    this.currActive = 17;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on18() {
    this.setVisitedAnswered();
    this.currActive = 18;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on19() {
    this.setVisitedAnswered();
    this.currActive = 19;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on20() {
    this.setVisitedAnswered();
    this.currActive = 20;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on21() {
    this.setVisitedAnswered();
    this.currActive = 21;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on22() {
    this.setVisitedAnswered();
    this.currActive = 22;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on23() {
    this.setVisitedAnswered();
    this.currActive = 23;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on24() {
    this.setVisitedAnswered();
    this.currActive = 24;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on25() {
    this.setVisitedAnswered();
    this.currActive = 25;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on26() {
    this.setVisitedAnswered();
    this.currActive = 26;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on27() {
    this.setVisitedAnswered();
    this.currActive = 27;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on28() {
    this.setVisitedAnswered();
    this.currActive = 28;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on29() {
    this.setVisitedAnswered();
    this.currActive = 29;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  on30() {
    this.setVisitedAnswered();
    this.currActive = 30;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  onNext() {
    this.setVisitedAnswered();
    this.currActive++;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  onPrev() {
    this.setVisitedAnswered();
    this.currActive--;
    this.findUnvisitedCount();
    this.active[this.currActive - 1] = true;
  }

  onClear() {
    if (this.currActive === 1) {
      this.questionForm.patchValue({
        q1: '',
      });
    } else if (this.currActive === 2) {
      this.questionForm.patchValue({
        q2: '',
      });
    } else if (this.currActive === 3) {
      this.questionForm.patchValue({
        q3: '',
      });
    } else if (this.currActive === 4) {
      this.questionForm.patchValue({
        q4: '',
      });
    } else if (this.currActive === 5) {
      this.questionForm.patchValue({
        q5: '',
      });
    } else if (this.currActive === 6) {
      this.questionForm.patchValue({
        q6: '',
      });
    } else if (this.currActive === 7) {
      this.questionForm.patchValue({
        q7: '',
      });
    } else if (this.currActive === 8) {
      this.questionForm.patchValue({
        q8: '',
      });
    } else if (this.currActive === 9) {
      this.questionForm.patchValue({
        q9: '',
      });
    } else if (this.currActive === 10) {
      this.questionForm.patchValue({
        q10: '',
      });
    } else if (this.currActive === 11) {
      this.questionForm.patchValue({
        q11: '',
      });
    } else if (this.currActive === 12) {
      this.questionForm.patchValue({
        q12: '',
      });
    } else if (this.currActive === 13) {
      this.questionForm.patchValue({
        q13: '',
      });
    } else if (this.currActive === 14) {
      this.questionForm.patchValue({
        q14: '',
      });
    } else if (this.currActive === 15) {
      this.questionForm.patchValue({
        q15: '',
      });
    } else if (this.currActive === 16) {
      this.questionForm.patchValue({
        q16: '',
      });
    } else if (this.currActive === 17) {
      this.questionForm.patchValue({
        q17: '',
      });
    } else if (this.currActive === 18) {
      this.questionForm.patchValue({
        q18: '',
      });
    } else if (this.currActive === 19) {
      this.questionForm.patchValue({
        q19: '',
      });
    } else if (this.currActive === 20) {
      this.questionForm.patchValue({
        q20: '',
      });
    } else if (this.currActive === 21) {
      this.questionForm.patchValue({
        q21: '',
      });
    } else if (this.currActive === 22) {
      this.questionForm.patchValue({
        q22: '',
      });
    } else if (this.currActive === 23) {
      this.questionForm.patchValue({
        q23: '',
      });
    } else if (this.currActive === 24) {
      this.questionForm.patchValue({
        q24: '',
      });
    } else if (this.currActive === 25) {
      this.questionForm.patchValue({
        q25: '',
      });
    } else if (this.currActive === 26) {
      this.questionForm.patchValue({
        q26: '',
      });
    } else if (this.currActive === 27) {
      this.questionForm.patchValue({
        q27: '',
      });
    } else if (this.currActive === 28) {
      this.questionForm.patchValue({
        q28: '',
      });
    } else if (this.currActive === 29) {
      this.questionForm.patchValue({
        q29: '',
      });
    } else if (this.currActive === 30) {
      this.questionForm.patchValue({
        q30: '',
      });
    }

    this.answered[this.currActive - 1] = false;
    // console.log(this.answered);
  }

  onChange() {
    this.answered[this.currActive - 1] = true;
    this.submitService.onAnswerSubmit(this.questionForm.value);
  }

  onSubmit() {
    this.isSubmit = true;
    this.submitService.onAnswerSubmit(this.questionForm.value);
    const submitDialogRef = this.dialog.open(SubmitDialogComponent);
  }
}
