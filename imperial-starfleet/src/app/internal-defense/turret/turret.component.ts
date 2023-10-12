import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent {
  turrets: any[] = new Array(16);
  @Input() turretNumber: number = 0;
}
