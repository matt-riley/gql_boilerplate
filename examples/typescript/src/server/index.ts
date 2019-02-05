import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "../schema";

const PORT: number = 3000;
const app = express();
const server: ApolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources,
  context: () => ({
    apiKey: process.env.LASTFM_KEY,
  }),
});

server.applyMiddleware({ app, path: "/" });

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
