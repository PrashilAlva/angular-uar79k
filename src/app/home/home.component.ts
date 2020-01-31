import { Component, OnInit } from '@angular/core';
import {IplService}  from '../ipl.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  teamNames;
  teamName;
  players;
  pieChart:GoogleChartInterface;
  tableChart:GoogleChartInterface;
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
          console.log(this.players);
          this.showRoleCharts(this.players);
      })
    } 
  }


  showRoleCharts(data){
  this.pieChart={
    chartType:"PieChart",
    dataTable:data,
    options: {
      title:'Players',
      highlightOnMouseOver: true,
      maxDepth: 1,
      maxPostDepth: 2,
      minHighlightColor: '#8c6bb1',
      midHighlightColor: '#9ebcda',
      maxHighlightColor: '#edf8fb',
      minColor: '#009688',
      midColor: '#f7f7f7',
      maxColor: '#ee8100',
      headerHeight: 15,
      showScale: true,
      height: 200,
      useWeightedAverageForAggregation: true
    }
  }
  }
  showTableChart(data){
    console.log("Hola");
  }
  onChartSelect(event){
    let role=event.selectedRowFormattedValues[0];
    this.iplService.getPlayersByTeamAndRole(this.teamName,role).subscribe(res=>{
      let players=res["players"];
      let data=[];
      data.push(["Name","Team","Role","Prics"])
      for(let p of players){
        data.push([p["player"],p["label"],p["role"],p["price"]])
      }
      this.showTableChart(data);
    })
  }

}