import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class TournamentService {
 
  baseURL: string = "http://localhost:8080/";
 
  constructor(private http: HttpClient) {
  }
 
  createTournament(){
    alert("create tournament hit")
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' })

  }
 
 

}