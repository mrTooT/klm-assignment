import { Component } from '@angular/core';
import { FlightDetailsService } from '../services/flight-details.service';
import { environment } from 'src/environments/environment';
import { FormControl } from "@angular/forms";

const TIMEOUT_DURATION = 2000;

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  public isLoading = false;
  public invalidBookingNumber = false;
  public familyName = new FormControl('');
  public bookingCode = new FormControl('');

  constructor(private flightDetailsService: FlightDetailsService) {}

  hasInvalidBookingNumber(): boolean {
    return this.invalidBookingNumber;
  }

  getBookingInformationString(): string {
    return environment.noBookingInformation;
  }

  onBookingCodeChange() {
    console.log('BookingCodeChanged');
    this.invalidBookingNumber = false;
  }

  canSubmit(): boolean {
    if (this.bookingCode.invalid || this.familyName.invalid) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    this.isLoading = true;

    this.flightDetailsService.getFlightDetails().subscribe(data => {
      setTimeout(() => {
        const bookingCode = data.data?.flightDetails?.bookingCode;
        if (bookingCode === this.bookingCode.value) {
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
