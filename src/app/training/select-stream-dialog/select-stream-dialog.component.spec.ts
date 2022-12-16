import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStreamDialogComponent } from './select-stream-dialog.component';

describe('SelectStreamDialogComponent', () => {
  let component: SelectStreamDialogComponent;
  let fixture: ComponentFixture<SelectStreamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectStreamDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStreamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
