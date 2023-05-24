import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsOneComponent } from './insights-one.component';

describe('InsightsOneComponent', () => {
  let component: InsightsOneComponent;
  let fixture: ComponentFixture<InsightsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
