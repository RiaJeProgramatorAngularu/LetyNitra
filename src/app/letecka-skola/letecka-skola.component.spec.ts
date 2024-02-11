import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeteckaSkolaComponent } from './letecka-skola.component';

describe('LeteckaSkolaComponent', () => {
  let component: LeteckaSkolaComponent;
  let fixture: ComponentFixture<LeteckaSkolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeteckaSkolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeteckaSkolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
