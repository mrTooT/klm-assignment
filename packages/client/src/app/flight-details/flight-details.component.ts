import { Component, OnInit } from '@angular/core';
import { FlightDetailsService } from '../services/flight-details.service';
import { FlightDetails, Segments } from './flight-details.model';
import { Apollo, gql } from 'apollo-angular'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  public flightDetails: FlightDetails;
  public loading = true;
  public error: any;

  // This is purely implemented for demo purposes
  // TODO: Add proper implementation
  public showMoreInformation = false;

  constructor(
    private apollo: Apollo,
    private flightDetailsService: FlightDetailsService) {
  }

  ngOnInit(): void {
    this.getFlightDetails();
  }

  getBookingInformationString(): string {
    return environment.noBookingInformation;
  }
  getFlightDetails() {
    this.flightDetailsService.getFlightDetails()
    .subscribe((data) => {
      this.flightDetails = data.data?.flightDetails as FlightDetails;
      console.log('flightDetails', this.flightDetails);
    });
  }

  onMoreInformationClick(segment: Segments) {
    // This is purely implemented for demo purposes
    // TODO: Add proper implementation
    this.showMoreInformation = !this.showMoreInformation;
  }
}
