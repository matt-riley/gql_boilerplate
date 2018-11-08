import { gql } from 'apollo-server-express';

import RootQuery from './root.graphql';

const schema = gql`
  ${RootQuery}
`;

export default schema;
