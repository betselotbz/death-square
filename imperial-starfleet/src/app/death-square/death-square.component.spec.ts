import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathSquareComponent } from './death-square.component';

describe('DeathSquareComponent', () => {
  let component: DeathSquareComponent;
  let fixture: ComponentFixture<DeathSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeathSquareComponent]
    });
    fixture = TestBed.createComponent(DeathSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
