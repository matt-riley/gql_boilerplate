import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from '../schema';
import resolvers from '../resolvers';
import mocks from '../../test/mocks';

const PORT = 5000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  mocks,
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
