import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const routes: Routes = [
  {
    path: 'checkin',
    component: CheckInComponent,
    data: {
      title: 'CHECK-IN'
    }
  },
  {
    path: 'details',
    component: FlightDetailsComponent,
    data: {
      title: 'FLIGHT DETAILS'
    }
  },
  {
    path: '',
    redirectTo: '/checkin',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/checkin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
