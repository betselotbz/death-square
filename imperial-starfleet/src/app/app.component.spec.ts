import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defense/internal-defenses.module';
import { ExternalDefensesModule } from './external-defense/external-defenses/external-defenses.module';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoWindowComponent } from './info-window/info-window.component';
import { TurretComponent } from './internal-defense/turret/turret.component'; 


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InfoWindowComponent, TurretComponent],
      imports: [InternalDefensesModule, ExternalDefensesModule, RouterTestingModule],
    }).compileComponents();
  });
  
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
