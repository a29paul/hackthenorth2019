import { Component } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StuTours';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([''])
  }
}



