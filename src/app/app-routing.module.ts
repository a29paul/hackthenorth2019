import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoFormComponent } from './info-form/info-form.component';


const routes: Routes = [
  {path: '', component: InfoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
