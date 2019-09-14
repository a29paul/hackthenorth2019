import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import {HeadingComponent} from './heading/heading.component'
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { StudentFormComponent } from './student-form/student-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-form', component: StudentFormComponent},
  { path: 'explore', component: ExploreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
