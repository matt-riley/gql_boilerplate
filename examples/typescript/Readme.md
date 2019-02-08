# Typescript

This is the same as the [Last.fm example](../lastfm/) except this example uses TypeScript instead of JS.

## How to use

`cd examples/typescript` from the main directory.

`yarn` or `npm install` to install the required packages.

Create a `.env` file with a [LastFM API key](https://www.last.fm/api/account/create) as `LASTFM_KEY=<api key here>`.

`yarn start:dev` or `npm run start:dev` to run in development.

`yarn start` or `npm start` to start the server as 'prod'.

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