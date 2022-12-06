const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Probably there is a way to better structure these GraphQL server responses,
  # Instead of 1 enormous file, but due to time constrains and since this is my first
  # time using Apollo and GraphQL, I let this be

  # This "FlightDetails" type defines the queryable fields for every book in our data source.
  type FlightDetails {
    bookingCode: String
    contactDetails: [ContactDetails]
    itinerary: Itinerary
    passengers: Passengers
  }

  type ContactDetails {
    class: String
    address: String
  }

  type Passengers {
    id: ID
    firstName: String
    lastName: String
    title: Code
  }

  type Itinerary {
    type: Type
    connections: [Connections]
  }

  enum Type {
    ONE_WAY
    RETURN
  }

  type Connections {
    id: ID!
    duration: Int
    origin: Airport
    destination: Airport
    segments: [Segments]
  }

  type Airport {
    IATACode: String!
    name: String
    city: AirportCity
  }

  type AirportCity {
    IATACode: String!
    name: String
    country: Code
  }

  type Code {
    code: String
    name: String
  }

  type Segments {
    id: ID!
    type: String
    checkInStart: String
  }


  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    flightDetails: FlightDetails
  }
`;

const flightDetails = {
    bookingCode: "PZIGZ3",
    contactDetails: [
      {
        class: "EmailAddress",
        address: "TRAINER@YAHOO.FR"
      }
    ],
    itinerary: {
      type: "ONE_WAY",
      connections: [
        {
          id: 1,
          duration: "120",
          origin: {
            IATACode: "AMS",
            name: "Schiphol",
            city: {
              IATACode: "AMS",
              name: "Amsterdam",
              country: {
                code: "NL",
                name: "The Netherlands"
              }
            }
          },
          destination: {
            IATACode: "NCE",
            name: "Cote D'Azur Airport",
            city: {
              IATACode: "NCE",
              name: "Nice",
              country: {
                code: "FR",
                name: "France"
              }
            }
          },
          segments: [
            {
              id: 2,
              type: "LOCAL",
              checkInStart: "2016-10-13T03:35+02:00",
              departFrom: {
                IATACode: "AMS",
                name: "Schiphol",
                city: {
                  IATACode: "AMS",
                  name: "Amsterdam",
                  country: {
                    code: "NL",
                    name: "The Netherlands"
                  }
                }
              },
              arriveOn: {
                IATACode: "NCE",
                name: "Cote D'Azur Airport",
                city: {
                  IATACode: "NCE",
                  name: "Nice",
                  country: {
                    code: "FR",
                    name: "France"
                  }
                }
              },
              marketingFlight: {
                number: "1263",
                carrier: {
                  code: "KL",
                  name: "KLM"
                },
                status: {
                  code: "CONFIRMED",
                  name: "Confirmed"
                },
                numberOfStops: 0,
                sellingClass: {
                  code: "Z"
                },
                operatingFlight: {
                  number: "1263",
                  carrier: {
                    code: "KL",
                    name: "KLM"
                  },
                  duration: "PT2H",
                  flown: false,
                  checkInStart: "2016-10-13T03:35+02:00",
                  localCheckInStart: "2016-10-13T03:35",
                  checkInEnd: "2016-10-14T08:35+02:00",
                  localCheckInEnd: "2016-10-14T08:35",
                  scheduledArrival: "2016-10-14T11:35+02:00",
                  localScheduledArrival: "2016-10-14T11:35",
                  scheduledDeparture: "2016-10-14T09:35+02:00",
                  localScheduledDeparture: "2016-10-14T09:35",
                  arrivalTerminal: {
                    name: "2"
                  },
                  cabin: {
                    code: "10",
                    name: "Business"
                  },
                  equipment: {
                    code: "73H",
                    name: "Boeing 737-800"
                  }
                }
              }
            }
          ]
        }
      ]
    },
    passengers: {
      id: 1,
      firstName: "RUUD",
      lastName: "HESP",
      title: {
        code: "MR",
        name: "Mr"
      }
    }
};

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    flightDetails: () => flightDetails,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
