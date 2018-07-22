import { makeExecutableSchema, addMockFunctionsToSchema } from 'apollo-server-express';
import mocks from '../../test/mocks';
import Resolvers from '../resolvers';

import RootQuery from './root.graphql';

const logger = { log: err => console.log(err) };

const SchemaDefinition = `
schema {
  query: Query
}`;

const Schema = [
  RootQuery,
  SchemaDefinition,
];

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
  allowUndefinedInResolve: true,
  logger,
});

addMockFunctionsToSchema({
  schema: executableSchema,
  mocks,
  preserveResolvers: true,
});

export default executableSchema;
