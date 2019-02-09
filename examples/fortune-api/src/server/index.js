import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import dataSources from '../connectors';
import schema from '../schema';
import resolvers from '../resolvers';

const PORT = 3000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
