import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightDetails } from '../flight-details/flight-details.model';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {
  url: string = environment.serverUrl + '/game';

  constructor(private httpClient: HttpClient) {
  }

  getUser(username: string): Observable<Boolean> {
    console.log('User is allowed to login with: ', username);
    return this.httpClient.post<Boolean>(this.url, username);
  }

  getFlightDetails(flightNumber: string): Observable<FlightDetails> {
    console.log('Getting flightDetails for flightnumber: ', flightNumber);
    this.url = this.url + '/' + flightNumber;
    return this.httpClient.get<FlightDetails>(this.url);
  }
}
