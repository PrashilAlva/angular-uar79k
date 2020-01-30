import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message="Welcome to IPL 2020!"
  teamNames=['RCB','CSK','RR','MI','DC','KXIP','SRH','KKR']

  constructor() { }

  ngOnInit() {
  }

}