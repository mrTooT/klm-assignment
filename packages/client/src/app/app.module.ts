import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

// Apollo Includes
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { environment } from 'src/environments/environment';
import { CheckInComponent } from './check-in/check-in.component';
 
const uri = environment.serverUrl;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailsComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
