import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowComponent } from './info-window.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('InfoWindowComponent', () => {
  let component: InfoWindowComponent;
  let fixture: ComponentFixture<InfoWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoWindowComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(InfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a findTurret() function to get data from the data banks.', () => {
    expect(typeof(component.findTurret)).toBe('function')
  })

});
