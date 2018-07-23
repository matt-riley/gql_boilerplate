import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import executableSchema from '../schema';
import resolvers from '../resolvers';

const PORT = 5000;

const app = express();

const server = new ApolloServer({
  schema: executableSchema
});
server.applyMiddleware({ app, path: '/' });

app.listen({ port: PORT }, () => 
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
