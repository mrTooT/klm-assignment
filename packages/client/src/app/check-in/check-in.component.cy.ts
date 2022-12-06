import { FlightDetailsService } from '../services/flight-details.service'
import { CheckInComponent } from './check-in.component'
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('CheckInComponent', () => {
  it('mounts', () => {
    cy.mount(CheckInComponent, {
        imports: [ApolloModule, HttpClientModule, FormsModule],
        providers: [FlightDetailsService]

    })
  })
})