import express from 'express';

import { ApolloServer } from 'apollo-server-express';

import dataSources from '../connectors';
import schema from '../schema';
import resolvers from '../resolvers';
import './env';

const PORT = 3000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
  context: () => ({
    apiKey: process.env.LASTFM_KEY,
  }),
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'light',
    },
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
