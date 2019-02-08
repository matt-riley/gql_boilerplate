import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dataSources from '../connectors/index';
import resolvers from '../resolvers';
import schema from '../schema';
import './env';

const app = express();
const server: ApolloServer = new ApolloServer({
  context: () => ({
    apiKey: process.env.LASTFM_KEY,
  }),
  dataSources,
  resolvers,
  typeDefs: schema,
});
const PORT: number = 3000;

server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
