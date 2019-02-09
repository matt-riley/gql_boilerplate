import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from '../schema';
import resolvers from '../resolvers';
import mocks from '../mocks';

const PORT = 3000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  mocks,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'light',
      'request.credentials': 'include',
      'tracing.hideTracingResponse': false,
    },
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
