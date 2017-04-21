import bodyParser from 'body-parser';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import Schema from '../schema';

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: Schema,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT);
