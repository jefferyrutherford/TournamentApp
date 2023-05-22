import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/data/tournaments.json"
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { testModel } from '../models/testModel';

@Component({
  selector: 'app-upcomming-t',
  templateUrl: './upcomming-t.component.html',
  styleUrls: ['./upcomming-t.component.css']
})


export class UpcommingTComponent implements OnInit {
  tournamentData = data
  baseURL: string = "http://localhost:8080/getTournamentsLatest";
  beData : any;
 
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    alert("onInit Hit")
    this.beData = this.http.get<testModel>("http://localhost:8080/")
    .pipe()
    .subscribe((res)=>{
      console.log(res.ID)
      console.log(res.message)
    })
    
    alert(this.beData)
  }

}
