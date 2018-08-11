import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipContactComponent } from './mentorship-contact.component';

describe('MentorshipContactComponent', () => {
  let component: MentorshipContactComponent;
  let fixture: ComponentFixture<MentorshipContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorshipContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
