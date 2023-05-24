import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsTwoComponent } from './tools-two.component';

describe('ToolsTwoComponent', () => {
  let component: ToolsTwoComponent;
  let fixture: ComponentFixture<ToolsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
