import RootQuery from '../../src/schema/root.graphql';

const query = `{
  me
}`;

let result;

describe('The Root Query', () => {
  beforeEach(async () => {
    result = await executeQuery(RootQuery, query);
  });

  it('returns null for the me field', () => {
    expect(result.data.me).to.be.null;
  });
});
