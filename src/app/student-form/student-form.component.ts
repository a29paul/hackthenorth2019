import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccentoursService } from '../accentours.service';





@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})



export class StudentFormComponent implements OnInit {
  startDate = new FormControl('');
  endDate = new FormControl('');
  reqFlight = new FormControl('');
  mcmaster = new FormControl('');
  uoft = new FormControl('');
  waterloo = new FormControl('');
  brock = new FormControl('');
  carleton = new FormControl('');
  ocad = new FormControl('');
  ryerson = new FormControl('');
  western = new FormControl('');
  ottawa = new FormControl('');
  york = new FormControl('');
  wlu = new FormControl('');
  guelph = new FormControl('');
  windsor = new FormControl('');

  value: string;
  viewValue: string;

  constructor(
    private accentours: AccentoursService,
  ) { }
  onSubmit() {
    // console.log(this.startDate.value);
    // console.log(this.endDate.value);
    // console.log(this.reqFlight.value);

    // console.log(this.waterloo.value);
    // console.log(this.brock.value);
    // console.log(this.carleton.value);

  }
  ngOnInit() {
    this.accentours.optimizeUniversityOrder(false, "CHN", "YYZ", ['university of toronto','brock university', 'mcmaster university', 'wilfrid laurier university', 'university of waterloo', 'university of windsor'])
    .subscribe((res) => {
      console.log(res)
    })
  }


}
