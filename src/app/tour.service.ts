import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  tourInformation = {
    startDate: '',
    endDate: '',
    reqFlight: '',
    originAirport: '',
    destAirport: '',
  }
  universityArray = [];
  constructor() { }
}
