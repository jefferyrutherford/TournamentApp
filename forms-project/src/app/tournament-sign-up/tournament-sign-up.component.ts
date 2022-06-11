import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder){
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
  }
  printForm(): String{
    return JSON.stringify(this.tournamentForm.value,null,2);
  }

}
