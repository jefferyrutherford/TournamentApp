import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class TournamentService {
 
  baseURL: string = "localhost:8080/";
 
  constructor(private http: HttpClient) {
  }
 
  createTournament(){
    alert("create tournament hit")
    return this.http.post<any>(this.baseURL, { title: 'Angular POST Request Example' })

  }
 
 

}