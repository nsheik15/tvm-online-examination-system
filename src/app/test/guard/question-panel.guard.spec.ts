import { TestBed } from '@angular/core/testing';

import { QuestionPanelGuard } from './question-panel.guard';

describe('QuestionPanelGuard', () => {
  let guard: QuestionPanelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuestionPanelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
