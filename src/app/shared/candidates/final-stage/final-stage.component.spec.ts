import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStageComponent } from './final-stage.component';

describe('FinalStageComponent', () => {
  let component: FinalStageComponent;
  let fixture: ComponentFixture<FinalStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
