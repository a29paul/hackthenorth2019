import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  password = new FormControl('');
  constructor() { }
  onSubmit(){
    console.log(this.password.value);
  }
  ngOnInit() {
  }

}
