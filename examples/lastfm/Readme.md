# LastFM

A slightly more complicated example of a GraphQL API. This includes a larger schema, the potential to call multiple endpoints and also introduces the idea of passing API tokens to REST endpoints.

## How to use
`cd examples/lastfm` from the main directory.

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