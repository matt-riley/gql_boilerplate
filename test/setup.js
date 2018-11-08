import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import resolvers from '../src/resolvers/index';

const executeQuery = (type, query) => {
  const schema = makeExecutableSchema({ typeDefs: type, resolvers });
  return graphql(schema, query);
};

global.chai = chai;
global.expect = expect;
global.sinon = sinon;
global.executeQuery = executeQuery;

chai.use(sinonChai);
