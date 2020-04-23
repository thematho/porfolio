import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathoHeaderComponent } from './matho-header.component';

describe('MathoHeaderComponent', () => {
  let component: MathoHeaderComponent;
  let fixture: ComponentFixture<MathoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
