import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdWindowComponent } from './cold-window.component';

describe('ColdWindowComponent', () => {
  let component: ColdWindowComponent;
  let fixture: ComponentFixture<ColdWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
