import { Component, OnInit, Input } from '@angular/core';
import { StudentFormComponent } from '../student-form/student-form.component';
import { FormInfo } from 'src/app/formInfo';
import { TourService } from '../tour.service';
import { AccentoursService } from '../accentours.service';

@Component({
  selector: 'app-available-tours',
  templateUrl: './available-tours.component.html',
  styleUrls: ['./available-tours.component.css']
})
export class AvailableToursComponent implements OnInit {

  constructor(
    private tourService: TourService,
    private apiService: AccentoursService
  ) { }
  tourInfo = this.tourService.universityArray;



  ngOnInit() {

    console.log(this.tourService.tourInformation);
    console.log(this.tourInfo);
  }






}
