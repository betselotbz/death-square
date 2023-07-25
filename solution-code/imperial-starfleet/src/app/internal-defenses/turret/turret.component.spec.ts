import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurretComponent } from './turret.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TurretComponent', () => {
  let component: TurretComponent;
  let fixture: ComponentFixture<TurretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurretComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(TurretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
