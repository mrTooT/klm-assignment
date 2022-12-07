export interface FlightDetails {
  bookingCode: string;
  contactDetails: ContactDetails[];
  itinerary: Itinerary;
  passengers: Passengers;
}

type ContactDetails = {
  class: string;
  address: string;
};

type Passengers = {
  id: string;
  firstName: string;
  lastName: string;
  title: Code;
};

type Itinerary = {
  type: Type;
  connections: [Connections];
};

enum Type {
  ONE_WAY,
  RETURN,
}

type Connections = {
  id: string;
  duration: number;
  origin: Airport;
  destination: Airport;
  segments: [Segments];
};

type Airport = {
  IATACode: string;
  name: string;
  city: AirportCity;
};

type AirportCity = {
  IATACode: string;
  name: string;
  country: Code;
};

type Code = {
  code: string;
  name: string;
};

export type Segments = {
  id: string;
  type: string;
  isVisible?: boolean;
};
