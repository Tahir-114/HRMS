import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingGraphComponent } from './reporting-graph.component';

describe('ReportingGraphComponent', () => {
  let component: ReportingGraphComponent;
  let fixture: ComponentFixture<ReportingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
