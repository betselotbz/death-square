import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-square',
  templateUrl: './death-square.component.html',
  styleUrls: ['./death-square.component.css']
})
export class DeathSquareComponent implements OnInit {
  turrets = new Array(16);
  ngOnInit(): void {
  }
}

