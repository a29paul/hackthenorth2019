import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormRankingComponent } from './student-form-ranking.component';

describe('StudentFormRankingComponent', () => {
  let component: StudentFormRankingComponent;
  let fixture: ComponentFixture<StudentFormRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFormRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
