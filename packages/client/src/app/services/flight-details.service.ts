import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightDetails } from '../flight-details/flight-details.model';
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
  url: string = environment.serverUrl + '/game';

  constructor(private httpClient: HttpClient,
              private apollo: Apollo) {
  }

  getUser(username: string): Observable<Boolean> {
    console.log('User is allowed to login with: ', username);
    return this.httpClient.post<Boolean>(this.url, username);
  }

  getFlightDetails(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: flightDetails
    }).valueChanges;

  }
}
