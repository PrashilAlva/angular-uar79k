import { Component, OnInit } from '@angular/core';
import {IplService}  from '../ipl.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams;

  constructor(private iplService:IplService) {
   }

  ngOnInit() {
    this.iplService.getIPLTeams().subscribe(res=>{
        this.teams = res["teams"];
    })
  }

}