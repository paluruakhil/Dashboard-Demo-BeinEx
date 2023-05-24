import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsOneComponent } from './tools-one.component';

describe('ToolsOneComponent', () => {
  let component: ToolsOneComponent;
  let fixture: ComponentFixture<ToolsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
