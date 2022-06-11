import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-project';
  volunteerForm: FormGroup;
  formSubmitted:Boolean;

  ngOnInit(): void {
      this.initializeForm();
      this.formSubmitted = false;
  }

  constructor(private fb: FormBuilder){
  }

  initializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: '',
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
    console.log(JSON.stringify(this.volunteerForm.value))
    this.formSubmitted =  true;
  }
  printForm(): String{
    return JSON.stringify(this.volunteerForm.value,null,2);
  }
}
