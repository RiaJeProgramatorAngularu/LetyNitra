import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetiskoNitraComponent } from './letisko-nitra.component';

describe('LetiskoNitraComponent', () => {
  let component: LetiskoNitraComponent;
  let fixture: ComponentFixture<LetiskoNitraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetiskoNitraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetiskoNitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
