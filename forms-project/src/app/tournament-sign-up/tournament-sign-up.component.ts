import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TournamentService } from 'src/BE_Services/tournament.service';

@Component({
  selector: 'app-tournament-sign-up',
  templateUrl: './tournament-sign-up.component.html',
  styleUrls: ['./tournament-sign-up.component.css']
})
export class TournamentSignUpComponent implements OnInit {
  title = 'forms-project';
  tournamentForm: FormGroup;
  formSubmitted:Boolean;
  stringForm: String;
 

  ngOnInit(): void {
      this.initializeForm();
      this.formSubmitted = false;
  }

  constructor(private fb: FormBuilder, private http:HttpClient, private tournamentService:TournamentService){
  }

  initializeForm(): void {
    this.tournamentForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',

      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      })

    })
  }
  onSubmit():void{
    console.log(JSON.stringify(this.tournamentForm.value))
    this.formSubmitted =  true;
    this.stringForm = JSON.stringify(this.tournamentForm.value)
    this.tournamentService.createTournament()
    
    
  }
  printForm(): String{
    return JSON.stringify(this.tournamentForm.value,null,2);
  }

}
