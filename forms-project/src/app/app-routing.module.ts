import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentSignUpComponent } from './tournament-sign-up/tournament-sign-up.component';

const routes: Routes = [{path:'tournamnentSignUp', component: TournamentSignUpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
