import { makeExecutableSchema } from 'apollo-server-express';
import resolvers from '../src/resolvers';
import schema from '../src/schema';

export default makeExecutableSchema({
  resolvers,
  typeDefs: schema,
});
