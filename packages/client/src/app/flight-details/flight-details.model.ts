export interface FlightDetails {
  bookingCode: String;
  contactDetails: ContactDetails[];
  itinerary: Itinerary;
  passengers: Passengers;
}

type ContactDetails = {
  class: String;
  address: String;
};

type Passengers = {
  id: String;
  firstName: String;
  lastName: String;
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
  id: String;
  duration: Number;
  origin: Airport;
  destination: Airport;
  segments: [Segments];
};

type Airport = {
  IATACode: String;
  name: String;
  city: AirportCity;
};

type AirportCity = {
  IATACode: String;
  name: String;
  country: Code;
};

type Code = {
  code: String;
  name: String;
};

export type Segments = {
  id: String;
  type: String;
  isVisible?: boolean;
};
