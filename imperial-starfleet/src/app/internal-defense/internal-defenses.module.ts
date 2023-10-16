// internal-defenses.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { RouterModule } from '@angular/router';
import { HoverDirective } from '../hover.directive'; 

@NgModule({
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    HoverDirective 
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    HoverDirective, 
    RouterModule,
  ]
})
export class InternalDefensesModule { }
