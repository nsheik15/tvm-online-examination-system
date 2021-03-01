import { SubmitDialogComponent } from './../submit-dialog/submit-dialog.component';
import { FormSubmitService } from './../form-submit.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'exam-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  active = [true];
  visited = [false];
  answered = [false];

  currActive = 1;
  questionForm: FormGroup;
  visitedCount = 0;
  unvisitedCount = 0;
  answeredCount = 0;
  unansweredCount = 0;
  isSubmit = false;
  isSubmitAppears = false;
  shuffledQuestion: any;
  questionNo = [0];
  selectedSubject: any;

  question: any;

  questionJava = [
    ['Why we use array as a parameter of main method?', ['It is syntax', 'It can store multiple values', 'Both of above ', 'None of above'], 'q1'],
    ['Can we declare abstract static method?', ['Yes', 'No'], 'q2'],
    ['Which of these is necessary condition for automatic type conversion in Java?', ['The destination type is smaller than source type', 'The destination type is larger than source type', 'The destination type can be larger or smaller than source type', 'None of the mentioned'], 'q3'],
    ['What is the prototype of the default constructor of this Java class?', ['prototype( )', 'prototype(void)', 'public prototype(void)', 'public prototype( )'], 'q4'],
    ['Floating-point value assigned to an integer type?', ['Type Convention', 'Cascading', 'Truncation', 'Wrapping'], 'q5'],
    ['Which component is responsible to optimize byte code into machine code?', ['JVM', 'JRE', 'JDK', 'JIT'], 'q6'],
    ['Invalid identifier with main method is?', ['Static', 'Default', 'Private', 'protected'], 'q7'],
    ['What is the extension of compiled java classes?', ['.js', '.text', '.java', '.class'], 'q8'],
    ['Which keyword is used for a class which has been declared final?', ['Final', 'Static', 'Abstract'], 'q9'],
    ['If we remove static modifier from main method of the program what is the output of the program?', ['Compilation error', 'Program runs fine', 'No Such Method Error', 'None of the above'], 'q10'],
    ['Which of the following is wrong sentence to unreferenced the object?', ['By nulling the reference', 'By assigning one reference to another ', 'By Using Object.newInstance() method', 'By anonymous Object method'], 'q11'],
    ['What will be the output of the following code?', ['1', '0', 'Compilation Error', 'EnumNotDefeinedException'], 'q12', 'enum Season{\n\tWINTER,SPRING,SUMMER;\n };\n System.out.println(Season.SPRING.ordinal());'],
    ['By default except static method all the methods in java is?', ['Default methods', 'Public methods', 'Virtual methods', 'Instance methods'], 'q13'],
    ['Which interface is control over serialization and deserialization?', ['FileFilter', 'Serializable', 'Externalization', 'ObjectInput'], 'q14'],
    ['Which of the following has the highest memory management', ['Heap', 'Java Virtual Machine', 'Stack Memory', 'String constant pool'], 'q15'],
    ['When a class extends the Thread class, it should override ………………… method of thread class to start that thread.', ['start()', 'run()', 'init()', 'go()'], 'q16'],
    ['Which of the following constructor of class Thread is valid one?', ['Thread(Runnable threadobject, int priority)', 'Thread(init priority)', 'Thread(Runnable threadObject, String threadName)', 'Thread(String threadName, int priority)', 'None of these'], 'q17'],
    ['How does java enables high performance?', ['Using Java Virtual Machine', 'Using Just In Time Compiler', 'Using  Java Development Kit', 'None of the above'], 'q18'],
    ['Which keyword references other classes in java?', ['implements', 'extends', 'import', 'interface'], 'q19'],
    ['Select invalid method of string class?', ['toUpperCase()', 'toLowerCase()', 'equalsIgnore()', 'None of the above'], 'q20'],
    ['Can we print or execute something without using main method?', ['Yes', 'No'], 'q21'],
    ['Which of the following statement is wrong?', ['Interface has only static and final variables', 'Abstract class can have static methods main method and constructor', 'Abstract class support multiple inheritance by default', 'Interface have only abstract methods'], 'q22'],
    ['Which one is the name of memory location?', ['Heap memory', 'Static container', 'Variable', 'JVM'], 'q23'],
    ['Inter-thread communication is used to avoid thread pooling?', ['True', 'False'], 'q24'],
    ['Which method is used to mark the thread daemon thread or a user thread?', ['isDaemon()', 'setDaemon()', 'daemon()', 'createDaemon()'], 'q25'],
    ['Which is the base class of all java classes?', ['java.object', 'java.lang.object', 'java.utill', 'java.class.object'], 'q26'],
    ['Can an interface implement another interface?', ['Yes', 'No'], 'q27'],
    ['An Interface which doesn’t have any declaration inside but enforces a mechanism?', ['Nested interface', 'Multiple Interface', 'Marker Interface', 'None of the above'], 'q28'],
    ['Method which is implemented in a language other than java is?', ['Static methods', 'Default methods', 'Native methods', 'None of the above'], 'q29'],
    ['	……………………  is used to find and fix bugs in the java program?', ['JVM', 'JRE', 'JDK', 'JDB'], 'q30']
  ];

  questionC = [
    ['What\'s the output?', ['10 9 10', '9 10 9', '9 9 10', 'None of the above'], 'q1', '#include<stdio.h>\nint main()\n{\\nint array[10]={3,0,8,1,12,8,9,2,13,10};\nint x,y,z;\nx=++array[2];\ny=array[2]++;\nz=array[x++];\nprintf("%d %d %d",x,y,z);\nreturn 0;\n}'],
    ['An uninitialized pointer in C is called ……………………', ['Constructor', 'dangling pointer', 'Wild pointer', 'Destructor'], 'q2'],
    ['What\'s the output?', ['1 11 10', '10 11 1', '10 11 10', '1 1 10'], 'q3', '#include<stdio.h>\nint main(){\nint a,b,c;\na=b=c=10;\nc=a++||++b && ++c;\nprintf("%d %d %d",c,a,b);\nreturn 0;\n}'],
    ['What\'s the output?', ['10', 'Compiletime error', '11', '0'], 'q4', '#include<stdio.h>\nint main()\n{\nconst int x=10;\nx++;\nprintf("%d",x);\nreturn 0;\n}'],
    ['Prototype of a function means?', ['Name of Function', 'Output of Function', 'Declaration of Function', 'Input of a Function'], 'q5'],
    ['What\'s the output?', ['10', '11', '9', 'compiletime error'], 'q6', '#include<stdio.h>\nint main()\n{\nint i=abc(10);\nprintf("%d",--i);\nreturn 0;\n}\nint abc(int i){\nreturn (i++);\n}'],
    ['If the two strings are identical,then strcmp() function returns?', ['1', '0', '-1', 'true'], 'q7'],
    ['What\'s the output?', ['10', '20', '11', '21'], 'q8', '#include<stdio.h>\nint main()\n{\nint a[]={10,20,30};\nprintf("%d",*a+1);\nreturn 0;\n}'],
    ['In C, which header file should be included to use functions like malloc() and calloc()?', ['memory.h', 'stdlib.h', 'string.h', 'dos.h'], 'q9'],
    ['Which is not a reserve keyword in c?', ['auto', 'main', 'case', 'register'], 'q10'],
    ['What\'s the output?', ['black', 'codeblack', 'code', 'compiletime error'], 'q11', '#include<stdio.h>\nint main()\n{\nif(printf("code")!=4){\n}\nelse\nprintf("black");\nreturn 0;\n}'],
    ['Far pointer can access ……………………', ['Single memory location', 'No memory location', 'All memory location', 'First and Last Memory Address'], 'q12'],
    ['A pointer pointing to a memory location of the variable even after deletion of the variable is known as?', ['Far pointer', 'dangling pointer', 'null pointer', 'void pointer'], 'q13'],
    ['What\'s the output?', ['4 2', '2 4', '2 3', '3 2'], 'q14', '#include<stdio.h>\nint main()\n{\nint x=6,y=4,z;\nif(!x>=5)\ny=3;\nz=2;\nprintf("%d %d",z,y);\nreturn 0\n}'],
    ['A C variable name can start with a?', ['Number', 'Underscore', 'Asterisk', 'Plus sign'], 'q15'],
    ['RunTime Polymorphism is achieved by?', ['friend function', 'virtual function', 'operator function', 'function overloading'], 'q16'],
    ['The break statement causes an exit?', ['from the innermost loop only', 'only from the innermost switch', 'from all loops & switches', 'from the innermost loop or switch'], 'q17'],
    ['It is possible to declare as a friend?', ['a member function', 'a global function', 'a class', 'all the above'], 'q18'],
    ['The new operator', ['returns a pointer to the variable', 'creates a variable called new', 'obtains memory for a new variable', 'tells how much memory is available'], 'q19'],
    ['An exception is caused by,', ['a hardware problem', 'a problem in the operation system', 'a syntax error', 'a run-time error'], 'q20'],
    ['Use of virtual functions implies,', ['overloading', 'overriding', 'static binding', 'dynamic binding'], 'q21'],
    ['which of the following ways are legal to access a class data member using this pointer?', ['this.x', '*this.x', '*(this.x)', '(*this).x'], 'q22'],
    ['which of the following declarations are illegal?', ['void*ptr;', 'char*str="hello";', 'char str="hello";', 'const"int p1;'], 'q23'],
    ['A copy constructor takes', ['no argument', 'one argument', 'two arguments', 'arbitrary no.of arguments'], 'q24'],
    ['The operator that cannot be overloaded is', ['++', '::', '()', '~'], 'q25'],
    ['A struct is the same as a class except that', ['there are no member functions', 'all members are public', 'cannot be used in inheritance hierarchy', 'it does have a this pointer'], 'q26'],
    ['Pure virtual functions', ['have to be redefined in the inherited class', 'cannot have public access specification', 'are mandatory for a virtual class', 'none of the above'], 'q27'],
    ['Additional information sent when an exception is thrown may be placed in', ['the throw keyword', 'the function that caused the error', 'the catch block', 'an object of the exception class'], 'q28'],
    ['Given a class named Book, which of the following is not valid constructor?', ['Book(){}', 'Book(Book b){}', 'Book(Book &b){}', 'Book(char*author,char*title){}'], 'q29'],
    ['A pointer to the base class can hold address of', ['only base class object', 'only derived class object', 'base class object as well as derived class object', 'none of the above'], 'q30']
  ];

  questionHTML = [
    ['What is the correct HTML for creating a hyperlink?', ['<a href =” http://WWW.yahoo.com”>yahoo</a>', '<a>http:// WWW.yahoo.com</a>', '<a>url =”http://www.yahoo.com”>yahoo.com</a>', 'Both (a) & (b)'], 'q1'],
    ['How can you open a link in a new tab/browser window?', ['<a href = “url” target = “_blank”>', '<a href =”url” target =”new”>', '<a href =”url” new>', '<a href = “url” target = “open_blank>'], 'q2'],
    ['Which of the following is correct way to send mail in HTML?', ['<a href = “mailto : XY@Y”>', '<ahref = “XY@Y”>', '<mail XY@Y</mail>', 'None of the above'], 'q3'],
    ['What are the some of the key new features in HTML5?', ['FIELDSET', 'LEGEND', ' BDO', 'Web Workers'], 'q4'],
    ['The tags in HTML are,', ['Case – Sensitive', 'In Upper Case', 'Not Case Sensitive', 'In Lower Case'], 'q5'],
    ['What is the REFRESH Meta tag used for?', ['Rewrite url', 'Redirect to a new domain', 'Refresh your content', 'Null'], 'q6'],
    ['Which format usually works best for photos?', ['JPG', 'HTML', 'GIF', 'PNG'], 'q7'],
    ['What does the GENERATOR Meta tag tell?', ['Who designed the page', 'Which program was used to produce the page', 'What type of server your page is on', 'Both (a) & (b)'], 'q8'],
    ['Use <td> and </td> to add what to your tables?', ['Columns', 'Rows', 'Steps', 'None of the above'], 'q9'],
    ['Which of the following attributes below are used for a font name?', ['Font Name', 'Fn', 'Font', 'Face'], 'q10'],
    ['Which of the following CSS property having first priority?', ['#div test', '.test', 'div #div test', 'div . test'], 'q11'],
    ['Which of the following selector selects all elements of E that have the attribute attr that end with the given value?', ['E[attr ^ =value]', 'E[attr* =value]', 'E[attr $=value]', 'none of the above'], 'q12'],
    ['Which of the following selector selects an element that no children?', [':empty', ':nochild', ':inheritance', ':no-child'], 'q13'],
    ['Which of the following Property is used to increase or decrease hoe bold or light a font appears?', ['font-family', 'font-style', 'font-variant', 'font-weight'], 'q14'],
    ['If we want to wrap a block of text around image which css property will be use?', ['Wrap', 'push', 'float', 'align'], 'q15'],
    ['If we want to use a nice looking green dotted border around an image, which css property will we use?', ['border-color', 'border-decoration', 'border-style', 'border-line'], 'q16'],
    ['Which of the following properties will use to display border around a cell without an content?', ['empty-cell', 'blank-cell', 'non content-cell', 'void-cell'], 'q17'],
    ['How can we write comment along with css code?', ['/*a comment*/', '//a comment//', '/a comment/', '<’a comment’>'], 'q18'],
    ['The default value of “position” attribute is..', ['fixed', 'absolute', 'inherit', 'relative'], 'q19'],
    ['How will you make all paragraph elements ‘RED’ in color?', ['p. all { colour : red}', 'p. all { colour : #990000}', 'all. p { colour: #998877 }', 'p{colour : red}'], 'q20'],
    ['Which type of  JavaScript language is ?', ['object-oriented', 'object-Based', 'Assembly-language', 'High-level'], 'q21'],
    ['Which one of the following also known as conditional expression:', ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'], 'q22'],
    ['The “function” and “var” are known as:', ['keywords', 'Datatypes', 'Declaration statements', 'Prototypes'], 'q23'],
    ['What is null in javascript', ['null means unknown value', 'null means empty string value', 'null means absence of value', 'null means zero value'], 'q24'],
    ['which of the folloing is not valid key word in javascript', ['this', 'try', 'module', 'function'], 'q25'],
    ['What will be the output of the following javascript code,', ['x=undefined', 'x=1', 'x=null', 'error : x is undefined'], 'q26', 'x=1\nconsole.log(\‘x=\’ +x);'],
    ['what will be the output of  the following  javascript code,', ['No Output', '0', '1', 'null'], 'q27', 'Var x = 0\ndo {\nconsole.log(x)\n}while(x>0)'],
    ['Which of the following is NOT a javascript object', ['a)var obj = new object()', 'var obj = {  name:”steve”};', 'var obj   = {};', 'var obj = {name:”steve”};'], 'q28'],
    ['In the javascript, which one of the folloing is not considered as an error:', ['Division by zero', 'Missing of semicolons', 'syntax error', 'Missing of  Brackets'], 'q29'],
    ['which of the following function of the string object returns the character in the string starting at the specified number of characters?', ['slice', 'split', 'substr()', 'search()'], 'q30']
  ];

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

    this.selectedSubject = localStorage.getItem('selectedSubject');
    if(this.selectedSubject === 'Java') {
      this.question = this.questionJava;
    } else if(this.selectedSubject === 'C, C++') {
      this.question = this.questionC;
    } else if(this.selectedSubject === 'HTML, CSS & JS') {
      this.question = this.questionHTML;
    }

    this.findUnvisitedCount();
    let ansVal = this.submitService.getAnswerValues();

    if (ansVal) {
      let ansObj = JSON.parse(ansVal);

      this.questionForm.setValue(ansObj);
    }

    this.shuffledQuestion = arrayShuffle(this.question);
    for(let i=0; i<30; i++) {
      this.shuffledQuestion[i][1] = arrayShuffle(this.shuffledQuestion[i][1]);
    }

    for(let i=0; i<30; i++) {
      if(i === 0) {
        this.active[i] = true;
      } else {
        this.active[i] = false;
      }
      this.visited[i] = false;
      this.answered[i] = false;
      this.questionNo[i] = i+1;
    }

    setInterval(() => {
      if (!this.isSubmitAppears) {
        this.isSubmitAppears = this.submitService.isAppearSubmit;
      } else {
        this.isSubmitAppears = this.submitService.isAppearSubmit;
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

  onQuestionChange(number: any) {
    if(number === 1) {
      this.setVisitedAnswered();
      this.currActive = 1;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 2) {
      this.setVisitedAnswered();
      this.currActive = 2;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 3) {
      this.setVisitedAnswered();
      this.currActive = 3;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 4) {
      this.setVisitedAnswered();
      this.currActive = 4;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 5) {
      this.setVisitedAnswered();
      this.currActive = 5;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 6) {
      this.setVisitedAnswered();
      this.currActive = 6;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 7) {
      this.setVisitedAnswered();
      this.currActive = 7;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 8) {
      this.setVisitedAnswered();
      this.currActive = 8;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 9) {
      this.setVisitedAnswered();
      this.currActive = 9;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 10) {
      this.setVisitedAnswered();
      this.currActive = 10;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 11) {
      this.setVisitedAnswered();
      this.currActive = 11;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 12) {
      this.setVisitedAnswered();
      this.currActive = 12;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 13) {
      this.setVisitedAnswered();
      this.currActive = 13;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 14) {
      this.setVisitedAnswered();
      this.currActive = 14;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 15) {
      this.setVisitedAnswered();
      this.currActive = 15;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 16) {
      this.setVisitedAnswered();
      this.currActive = 16;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 17) {
      this.setVisitedAnswered();
      this.currActive = 17;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 18) {
      this.setVisitedAnswered();
      this.currActive = 18;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 19) {
      this.setVisitedAnswered();
      this.currActive = 19;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 20) {
      this.setVisitedAnswered();
      this.currActive = 20;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 21) {
      this.setVisitedAnswered();
      this.currActive = 21;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 22) {
      this.setVisitedAnswered();
      this.currActive = 22;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 23) {
      this.setVisitedAnswered();
      this.currActive = 23;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 24) {
      this.setVisitedAnswered();
      this.currActive = 24;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 25) {
      this.setVisitedAnswered();
      this.currActive = 25;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 26) {
      this.setVisitedAnswered();
      this.currActive = 26;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 27) {
      this.setVisitedAnswered();
      this.currActive = 27;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 28) {
      this.setVisitedAnswered();
      this.currActive = 28;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 29) {
      this.setVisitedAnswered();
      this.currActive = 29;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }

    else if(number === 30) {
      this.setVisitedAnswered();
      this.currActive = 30;
      this.findUnvisitedCount();
      this.active[this.currActive - 1] = true;
    }
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
