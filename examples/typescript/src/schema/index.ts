import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

import LastFM from './lastfm';
import RootQuery from './root';

const schema: DocumentNode = gql`
  ${RootQuery}
  ${LastFM}
`;

export default schema;
