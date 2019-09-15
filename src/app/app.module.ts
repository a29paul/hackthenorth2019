import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeComponent} from './home/home.component';
<<<<<<< HEAD


import { MatFormField, MatError } from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> ffbd7b7fa10f49b182dccb8d5fd11e696cdbf021
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
