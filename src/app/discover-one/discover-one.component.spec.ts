import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOneComponent } from './discover-one.component';

describe('DiscoverOneComponent', () => {
  let component: DiscoverOneComponent;
  let fixture: ComponentFixture<DiscoverOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
