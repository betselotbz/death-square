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
      console.log(params);
      this.findTurret(params.get('id'));
    });
  }

  findTurret(id: string | null): void{
    this.http.get(`https://impreial-starfleet.onrender.com/api/turrets/${id}`)
      .subscribe(response => {
        console.log(response);
        this.dataBanks = response;
      });
  }

}
