# Fortune Cookie API

This is a fairly simple API to demonstrate how to set up a GraphQL server using Apollo Server 2. Using [The Fortune Cookie API](http://fortunecookieapi.herokuapp.com/)

## How to use:

From the main `gql_boilerplate` directory, in your terminal `cd examples/fortune-api`.

Then run `npm install` or `yarn` to install the required packages.

`npm start` or `yarn start` will then start the server locally at [http://localhost:3000](http://localhost:3000).

## Example Query

```graphql
{
  fortunes(limit: 5, skip: 500) {
    id
    message
  }
}
```
