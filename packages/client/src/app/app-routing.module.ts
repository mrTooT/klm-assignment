import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const routes: Routes = [
  {
    path: '',
    component: FlightDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
