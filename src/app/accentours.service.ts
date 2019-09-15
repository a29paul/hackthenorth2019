import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccentoursService {
  serverUrl = '';
  constructor(
    private http: HttpClient,
  ) { }
  universityArray = [];
  getNewsData(university) {
   this.serverUrl = 'https://142b4838.ngrok.io/newsFeed'
   const data = {university};
   return this.http.post(this.serverUrl, data);
  }
  convertMoney(perferredCurrency, amount) {
    this.serverUrl = 'https://142b4838.ngrok.io/moneyConvert'
    const data = {perferredCurrency, amount};
    return this.http.post(this.serverUrl, data);
  }
  getFlightPrices(originAirport, university, dateOfDeparture, dateOfReturn) {
    this.serverUrl = 'https://142b4838.ngrok.io/flightPrices'
    const data = {originAirport, university, dateOfDeparture, dateOfReturn};
    return this.http.post(this.serverUrl, data);
  }
  optimizeUniversityOrder(isLocal, origin, arrayOfUniversities) {
    this.serverUrl = 'https://142b4838.ngrok.io/optimize';
    const data = {isLocal, origin, arrayOfUniversities};
    return this.http.post(this.serverUrl, data);
  }
  createUser(username){
    this.serverUrl = 'https://142b4838.ngrok.io/create_user';
    const data = {username};
    return this.http.post(this.serverUrl, data);
  }
  bookTour(username, tour_id, spots_required){
    this.serverUrl = 'https://142b4838.ngrok.io/book_tour';
    const data = {username, tour_id, spots_required};
    return this.http.post(this.serverUrl, data);
  }
  getTours(university){
    this.serverUrl = 'https://142b4838.ngrok.io/get_tours';
    const data = {university};
    return this.http.post(this.serverUrl, data);
  }

}
