import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContactComponent } from './game-contact.component';

describe('GameContactComponent', () => {
  let component: GameContactComponent;
  let fixture: ComponentFixture<GameContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
