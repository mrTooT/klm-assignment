# KLM Assignment

This is my KLM assignment, I had a lot of fun creating this repository.

It was my first time using GraphQL so I learned a lot

My assumption is that KLM uses a (self maintained) design library. Therefor I included the CSS Library Bulma to mimic that.

Please login with flightnumber = `PZIGZ3`

Please note that because of time constraints, I put not that much effort into the Flight Details page. I only used Bulma elements to quickly display the data

## Installation

I use `lerna` to both install the backend and frontend projects, by running:

```bash
npm install-all
```

I use `lerna` to both start the backend and frontend projects, by running:

```bash
npm start
```

# Cypress Component Testing

You can test the Log-in Form Acceptance criteria with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/angular/overview), by running:

```bash
npm test
```

## Usage

This project uses:
- [Lerna](https://lerna.js.org/docs/getting-started)
- [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/angular/overview)
- Angular 14 (not 15, [because it does not work with](https://github.com/kamilkisiela/apollo-angular/issues/1848) :point_down:
- GraphQL Apollo with [Apollo Angular](https://the-guild.dev/graphql/apollo-angular/docs)
- [Bulma](https://bulma.io/documentation/) CSS Library
- [Prettier](https://prettier.io/docs/en/install.html)
- [Linting with eslint](https://eslint.org/)

## Improvements

Things that I wanted to implement but did not have time for
- Frontend mocking
- Get more data from json file
- Semantics of flight-details page
- Enrichment of data of flight-details page
- Share Models between client and server
