import { Component } from '@angular/core';
import { Checkin } from './check-in.model';
import { FlightDetailsService } from '../services/flight-details.service';
import { environment } from 'src/environments/environment';

const TIMEOUT_DURATION = 2000;

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  public checkin: Checkin = {
    bookingCode: '',
    familyName: '',
  };
  public isLoading = false;
  public invalidBookingNumber = false;

  constructor(private flightDetailsService: FlightDetailsService) {}

  hasInvalidBookingNumber(): boolean {
    return this.invalidBookingNumber;
  }

  getBookingInformationString(): string {
    return environment.noBookingInformation;
  }

  canSubmit(): boolean {
    if (this.checkin.bookingCode && this.checkin.familyName) {
      if (this.checkin.bookingCode.length === 5) {
        return true;
      } else if (this.checkin.familyName.length > 4) {
        return true;
      }
    }
    return false;
  }

  onSubmit(): void {
    this.isLoading = true;

    this.flightDetailsService.getFlightDetails().subscribe(data => {
      setTimeout(() => {
        const bookingCode = data.data?.flightDetails?.bookingCode;
        console.log('bookingsCode', bookingCode);
        if (bookingCode === this.checkin.bookingCode) {
          this.invalidBookingNumber = false;
          this.navigateToFlightDetails();
        } else {
          this.invalidBookingNumber = true;
          this.isLoading = false;
        }
      }, TIMEOUT_DURATION);
    });
  }

  navigateToFlightDetails(): void {
    window.location.href = '/details';
  }
}
