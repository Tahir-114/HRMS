import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterEvaluationComponent } from './inter-evaluation.component';

describe('InterEvaluationComponent', () => {
  let component: InterEvaluationComponent;
  let fixture: ComponentFixture<InterEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
