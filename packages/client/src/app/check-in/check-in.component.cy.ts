// The maximum length of the booking code is 6 characters.
// The minimum length of the booking code is 5 characters.
// Numbers allowed in the booking code are 2-9.
// All alphabetical letters are allowed in the booking code;
// Family name should be at least 2 characters;
// Family name has a maximum length of 30 characters;

import { FlightDetailsService } from '../services/flight-details.service'
import { CheckInComponent } from './check-in.component'
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OneErrorMessagePipe} from "./one-error-message.pipe";


describe('CheckInComponent', () => {
  it('mounts', () => {
    cy.mount(CheckInComponent, {
        declarations: [OneErrorMessagePipe],
        imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
        providers: [FlightDetailsService]

    })
  })

  it('submit button should not be disabled when form validates', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService]
    })
    cy.get('[data-cy=booking]').type('234567')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=button]').should('not.be.disabled')
  })

  it('submit button should disabled when booking input has to few chars', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService]
    })
    cy.get('[data-cy=booking]').type('123')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=button]').should('be.disabled')

  })

  it('submit button should disabled when  booking Number 4 characters', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService]
    })
    cy.get('[data-cy=booking]').type('2346')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=button]').should('be.disabled')
  })

  it('submit button should disabled when  booking Number has the number 1', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService]
    })
    cy.get('[data-cy=booking]').type('111111')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=button]').should('be.disabled')
  })

  it('should only have 1 error message for booking code when multiple errors are active', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService]
    })
    cy.get('[data-cy=booking]').type('11')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=booking-error]').children().should('have.length', 1)

  })

  it('should be submitting the data when clicked the submit button', () => {
    cy.mount(CheckInComponent, {
      declarations: [OneErrorMessagePipe],
      imports: [ApolloModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [FlightDetailsService],
      componentProperties: {
        onSubmit: cy.spy().as('onSubmitSpy')
      },
    })
    cy.get('[data-cy=booking]').type('234567')
    cy.get('[data-cy=name]').type('Toetenel')
    cy.get('[data-cy=button]').should('not.be.disabled')
    cy.get('[data-cy=button]').click()
    cy.get('@onSubmitSpy').should('have.been.called')
  })
})
