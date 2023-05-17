import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentSignUpComponent } from './tournament-sign-up/tournament-sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UpcommingTComponent } from './upcomming-t/upcomming-t.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TournamentSignUpComponent,
    NavBarComponent,
    UpcommingTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
