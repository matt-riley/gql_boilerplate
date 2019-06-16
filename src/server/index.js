import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from '../schema';
import resolvers from '../resolvers';
import mocks from '../mocks';

import logger from '../config/logger';

const PORT = process.env.PORT || 3000;

const context = () => {
  return { logger };
};

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  context,
  resolvers,
  mocks,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'dark',
      'request.credentials': 'include',
      'tracing.hideTracingResponse': false,
    },
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => logger.info(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
