import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/data/tournaments.json"

@Component({
  selector: 'app-upcomming-t',
  templateUrl: './upcomming-t.component.html',
  styleUrls: ['./upcomming-t.component.css']
})
export class UpcommingTComponent implements OnInit {
  tournamentData = data
  constructor() { }

  ngOnInit(): void {
    console.log(JSON.stringify(data))
  }

}
