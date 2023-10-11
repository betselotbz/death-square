import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DeathSquareComponent } from './internal-defense/death-square/death-square.component';
import { TurretComponent } from './internal-defense/turret/turret.component';
import { LaserCannonComponent } from './internal-defense/laser-cannon/laser-cannon.component';
import { TieFighterComponent } from './internal-defense/tie-fighter/tie-fighter.component';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';

@NgModule({
  declarations: [
    AppComponent,
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    TieFighterComponent,
    StarDestroyerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
