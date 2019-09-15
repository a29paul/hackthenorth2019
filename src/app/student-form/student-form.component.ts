import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { TourService } from '../tour.service';




@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})



export class StudentFormComponent implements OnInit {

  startDate = new FormControl('');
  endDate = new FormControl('');
  reqFlight = new FormControl('');
  originAirport = new FormControl('');
  destAirport = new FormControl('');
  mcmaster = new FormControl(false);
  uoft = new FormControl(false);
  waterloo = new FormControl(false);
  brock = new FormControl(false);
  carleton = new FormControl(false);
  ocad = new FormControl(false);
  ryerson = new FormControl(false);
  western = new FormControl(false);
  ottawa = new FormControl(false);
  york = new FormControl(false);
  wlu = new FormControl(false);
  guelph = new FormControl(false);
  windsor = new FormControl(false);
  queens = new FormControl(false);
  value: string;
  viewValue: string;
  airportNeeded = false;

  form  = {
    startDate: this.startDate.value,
    endDate: this.endDate.value,
    reqFlight: this.reqFlight.value,
    originAirport: this.originAirport.value,
    destAirport: this.destAirport.value,
    mcmaster: this.mcmaster.value,
    uoft: this.uoft.value,
    waterloo: this.waterloo.value,
    brock: this.brock.value,
    carleton: this.carleton.value,
    ocad : this.ocad.value,
    ryerson : this.ryerson.value,
    western: this.western.value,
    ottawa: this.ottawa.value,
    york: this.york.value,
    wlu: this.wlu.value,
    guelph: this.guelph.value,
    windsor: this.windsor.value,
    queens: this.queens.value
  };


  constructor(
    private router: Router,
    private tourService: TourService
  ) { }

  onSubmit() {
    console.log(this.startDate.value);
    console.log(this.endDate.value);
    console.log(this.reqFlight.value);

    console.log(this.waterloo.value);
    console.log(this.brock.value);
    console.log(this.carleton.value);

    console.log(this.form);
    this.tourService.tourInformation.startDate = this.startDate.value;
    this.tourService.tourInformation.endDate = this.endDate.value;
    this.tourService.tourInformation.reqFlight = this.reqFlight.value;
    this.tourService.tourInformation.originAirport = this.originAirport.value;
    this.tourService.tourInformation.destAirport = this.destAirport.value;
    if(this.mcmaster.value) {
      this.tourService.universityArray.push('mcmaster university');
    }
    if(this.carleton.value) {
      this.tourService.universityArray.push('carleton university');
    }
    if(this.uoft.value) {
      this.tourService.universityArray.push('university of toronto');
    }
    if(this.waterloo.value) {
      this.tourService.universityArray.push('university of waterloo');
    }
    if(this.western.value) {
      this.tourService.universityArray.push('western university');
    }
    if(this.ocad.value) {
      this.tourService.universityArray.push('ocad university');
    }
    if(this.windsor.value) {
      this.tourService.universityArray.push('university of windsor');
    }
    if(this.wlu.value) {
      this.tourService.universityArray.push('wilfrid laurier university');
    }
    if(this.ottawa.value) {
      this.tourService.universityArray.push('university of ottawa');
    }
    if(this.ryerson.value) {
      this.tourService.universityArray.push('ryerson university');
    }
    if(this.york.value) {
      this.tourService.universityArray.push('york university');
    }
    if(this.guelph.value) {
      this.tourService.universityArray.push('university of guelph');
    }
    if(this.brock.value){
      this.tourService.universityArray.push('brock university');
    }
    if(this.queens.value){
      this.tourService.universityArray.push('queen\'s university');
    }

    this.router.navigate(['', 'available-tours']);
  }
  winterClicked() {
    this.startDate.setValue(stringify(new Date().getFullYear()) + '-' + '12' + '-' + '01');
    this.endDate.setValue(stringify(new Date().getFullYear() + 1) + '-' + '02' + '-' + '28');
  }

  fallClicked() {
    this.startDate.setValue(stringify(new Date().getFullYear()) + '-' + '09' + '-' + '01');
    this.endDate.setValue(stringify(new Date().getFullYear()) + '-' + '11' + '-' + '30');
  }

  summerClicked() {
      this.startDate.setValue(stringify(new Date().getFullYear()) + '-' + '06' + '-' + '01');
      this.endDate.setValue(stringify(new Date().getFullYear()) + '-' + '08' + '-' + '31');
  }


  springClicked() {
        this.startDate.setValue(stringify(new Date().getFullYear()) + '-' + '03' + '-' + '01');
        this.endDate.setValue(stringify(new Date().getFullYear()) + '-' + '05' + '-' + '31');
  }

  airportNeed() {
    console.log(this.reqFlight.value === 'Yes');
    console.log(this.reqFlight.value);

    if (this.reqFlight.value === 'Yes') {
      this.airportNeeded = true;
    } else if (this.reqFlight.value){
      this.airportNeeded = false;
    }

  }

  ngOnInit() {
  }


}
