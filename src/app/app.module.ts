import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserFormComponent } from './user-form/user-form.component';
import {HomeComponent} from './home/home.component';

import { MatFormField, MatError } from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

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
    AvailableToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
