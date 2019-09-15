import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';
  
//import { UserFormComponent } from './user-form/user-form.component';
import {HeadingComponent} from './heading/heading.component'
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AvailableToursComponent } from './available-tours/available-tours.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-form', component: StudentFormComponent},
  { path: 'explore', component: ExploreComponent },
  { path: 'available-tours', component: AvailableToursComponent},
  {path: 'create', component: InfoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
