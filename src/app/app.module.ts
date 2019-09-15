import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadingComponent } from './heading/heading.component';
import { ExploreComponent } from './explore/explore.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentFormRankingComponent } from './student-form-ranking/student-form-ranking.component';
import { AvailableToursComponent } from './available-tours/available-tours.component';



@NgModule({
  declarations: [
    AppComponent,
    //UserFormComponent,
    NavbarComponent,
    HeadingComponent,
    HomeComponent,
    ExploreComponent,
    StudentFormComponent,
    StudentFormRankingComponent,
    AvailableToursComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
