import { Component } from '@angular/core';

@Component({
  selector: 'app-tie-fighter',
  templateUrl: './tie-fighter.component.html',
  styleUrls: ['./tie-fighter.component.css']
})
export class TieFighterComponent {
  tieFighters: any[] = new Array(15);

}
