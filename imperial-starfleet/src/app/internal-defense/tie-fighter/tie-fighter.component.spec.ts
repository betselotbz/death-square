import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieFighterComponent } from './tie-fighter.component';

describe('TieFighterComponent', () => {
  let component: TieFighterComponent;
  let fixture: ComponentFixture<TieFighterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TieFighterComponent]
    });
    fixture = TestBed.createComponent(TieFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
