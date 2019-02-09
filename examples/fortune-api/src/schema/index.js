import { gql } from 'apollo-server-express';

import Fortune from './fortune.graphql';
import Lesson from './lesson.graphql';
import Lotto from './lotto.graphql';
import RootQuery from './root.graphql';


const schema = gql`
  ${RootQuery}
  ${Fortune}
  ${Lesson}
  ${Lotto}
`;

export default schema;
