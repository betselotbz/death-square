import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
