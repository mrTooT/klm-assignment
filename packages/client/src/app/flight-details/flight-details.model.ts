export interface FlightDetails {
    bookingCode: String
    contactDetails: ContactDetails
    itinerary: Itinerary
}

type ContactDetails =  {
    class: String
    address: String
}

type Itinerary = {
    type: Type
    connections: [Connections]
}

enum Type  {
    ONE_WAY,
    RETURN
}

type Connections =  {
    id: String
    duration: Number
    origin: Airport
    destination: Airport
    segments: [Segments]
}

type Airport = {
    IATACode: String
    name: String
    city: AirportCity
}

type AirportCity = {
    IATACode: String
    name: String
    country: Code
}

type Code = {
    code: String
    name: String
}

type Segments = {
    id: String
    type: String
}
  