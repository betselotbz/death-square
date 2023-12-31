import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserCannonComponent } from './laser-cannon.component';

describe('LaserCannonComponent', () => {
  let component: LaserCannonComponent;
  let fixture: ComponentFixture<LaserCannonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaserCannonComponent]
    });
    fixture = TestBed.createComponent(LaserCannonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
