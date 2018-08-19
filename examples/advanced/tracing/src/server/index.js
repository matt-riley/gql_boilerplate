import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from '../schema';
import resolvers from '../resolvers';
import dataSources from '../connectors';
import './env';

const PORT = 3000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
  tracing: true,
  context: () => ({
    apiKey: process.env.LASTFM_KEY
  }),
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'light',
      'request.credentials': 'include',
      'tracing.hideTracingResponse': false,
    }
  }
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
