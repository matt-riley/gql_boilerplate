import { gql } from 'apollo-server-express';

import RootQuery from './root.graphql';
import LastFM from './lastfm';


const schema = gql`
  ${RootQuery}
  ${LastFM}
`;

export default schema;
