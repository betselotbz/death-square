import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { DeathSquareComponent } from './internal-defense/death-square/death-square.component';
// import { TurretComponent } from './internal-defense/turret/turret.component';
// import { LaserCannonComponent } from './internal-defense/laser-cannon/laser-cannon.component';
// import { TieFighterComponent } from './internal-defense/tie-fighter/tie-fighter.component';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';

import { IntervalDirective } from './interval.directive';
import { InternalDefensesModule } from './internal-defense/internal-defenses.module';
import { ExternalDefensesModule } from './external-defense/external-defenses/external-defenses.module';

@NgModule({
  declarations: [
    AppComponent,
    // DeathSquareComponent,
    // TurretComponent,
    // LaserCannonComponent,

    // TieFighterComponent,
   
   
    IntervalDirective
  ],
  imports: [
    InternalDefensesModule,
    ExternalDefensesModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
