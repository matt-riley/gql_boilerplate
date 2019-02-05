# Typescript

Building upon the [Last.fm example](../lastfm/), this example uses TypeScript instead of JS. Hopefully proving the value of TypeScript and how to use it when writing a GraphQL server.

## How to use
`cd examples/typescript` from the main directory.

`yarn` or `npm install` to install the required packages.

Create a `.env` file with a [LastFM API key](https://www.last.fm/api/account/create) as `LASTFM_KEY=<api key here>`.

`yarn start` or `npm start` to start the server.

When querying you **have** to include a LastFM username, authentication isn't included in this example.

## Example Query
```graphql
{
  lastfm {
    user(username: "RJ") {
      recentTracks(limit: 5) {
        name
        artist {
          name
        }
      }
    }
  }
}
```