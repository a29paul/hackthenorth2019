import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableToursComponent } from './available-tours.component';

describe('AvailableToursComponent', () => {
  let component: AvailableToursComponent;
  let fixture: ComponentFixture<AvailableToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
