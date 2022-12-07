import { FlightDetailsService } from '../services/flight-details.service';
import { FlightDetailsComponent } from './flight-details.component';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('FlightDetailsComponent', () => {
  it('mounts', () => {
    cy.mount(FlightDetailsComponent, {
      imports: [ApolloModule, HttpClientModule, FormsModule],
      providers: [FlightDetailsService],
    });
  });
});
