import { Component, OnInit, Injectable } from '@angular/core';
import { Student } from 'C:/Users/Emilio/Documents/Projects/hackthenorth2019/src/student';


@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  
  student: Student = {
    first: 'Enter first name',
    last: 'Enter last name',
    user: 'Enter user name',
    extra: 0,
    password: "Enter password"
  };

  constructor() { }

  ngOnInit() {
  }

}
