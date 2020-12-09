import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTestDialogComponent } from './end-test-dialog.component';

describe('EndTestDialogComponent', () => {
  let component: EndTestDialogComponent;
  let fixture: ComponentFixture<EndTestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndTestDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
