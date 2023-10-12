import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

  dataBanks: any; 
  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const turretNumber = Number(params.get('id'));
      this.findTurret(turretNumber);
    });
  }
  

  findTurret(turretNumber: number): void {
    this.http.get<any>(`https://imperial-starfleet.onrender.com/api/turrets/${turretNumber}`)
      .subscribe(dataBanks => {
        console.log(dataBanks);  
        this.dataBanks = dataBanks; 
      });
  }
}
