import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';



@NgModule({
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
