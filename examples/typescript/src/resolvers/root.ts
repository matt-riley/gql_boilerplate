import { Context, ContextFunction } from 'apollo-server-core';
import { GraphQLRequestContext } from 'apollo-server-plugin-base';

export default {
  Query: {
    lastfm(_: null, __: null, context: GraphQLRequestContext) {
      return context;
    },
  },
};
