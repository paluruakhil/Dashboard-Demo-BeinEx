import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverTwoComponent } from './discover-two.component';

describe('DiscoverTwoComponent', () => {
  let component: DiscoverTwoComponent;
  let fixture: ComponentFixture<DiscoverTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
