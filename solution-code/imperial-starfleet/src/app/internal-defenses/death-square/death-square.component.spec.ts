import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathSquareComponent } from './death-square.component';
import { LaserCannonComponent } from '../laser-cannon/laser-cannon.component';
import { TurretComponent } from '../turret/turret.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DeathSquareComponent', () => {
  let component: DeathSquareComponent;
  let fixture: ComponentFixture<DeathSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeathSquareComponent,
        LaserCannonComponent,
        TurretComponent
      ],
      imports: [
        RouterTestingModule
      ],
    });
    fixture = TestBed.createComponent(DeathSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
