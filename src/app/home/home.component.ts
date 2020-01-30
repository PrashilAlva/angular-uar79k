import { Component, OnInit } from '@angular/core';
import {IplService}  from '../ipl.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  teamNames;
  teamName;
  players;
  constructor(private iplService:IplService) { }

  ngOnInit() {
    this.iplService.teamLabels().subscribe(res=>{
        this.teamNames = res["labels"];
    })
  }
  getPlayerOfTeam(event){
    this.teamName = event.target.value;
    if(this.teamName && this.teamName.length > 0){
      this.iplService.getPlayersByTeamName(this.teamName)
      .subscribe(res=>{
          this.players = res["players"];
          console.log(this.players)
      })
    }
  }

}