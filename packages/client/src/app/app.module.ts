import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { environment } from 'src/environments/environment';
import { CheckInComponent } from './check-in/check-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Apollo Includes
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { OneErrorMessagePipe } from './check-in/one-error-message.pipe';

const uri = environment.serverUrl;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  declarations: [AppComponent, FlightDetailsComponent, CheckInComponent, OneErrorMessagePipe],
  imports: [BrowserModule, AppRoutingModule, ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
