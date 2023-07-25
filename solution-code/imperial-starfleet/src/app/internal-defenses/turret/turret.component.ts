import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent {
  @Input('turretNumber') turretNumber!: number;
}
