import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

const flightDetails = gql`
  query GetFlightDetails {
    flightDetails {
      bookingCode
      contactDetails {
        class
        address
      }
      itinerary {
        type
        connections {
          id
            duration
            origin {
              IATACode
              name
              city {
                IATACode
                name
                country {
                  code
                  name
                }
              }
            }
            destination {
              IATACode
              name
              city {
                IATACode
                name
                country {
                  code
                  name
                }
              }
            }
            segments {
              id
              type
            }
          }
        }
      }
    }
`;

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {

  constructor(private apollo: Apollo) {
  }

  getFlightDetails(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: flightDetails
    }).valueChanges;

  }
}
