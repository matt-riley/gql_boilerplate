import root from '../../src/resolvers/root';
import fakeContext from '../../__mocks__/fakeContext';

jest.mock('../../src/connectors/cookie');

describe('root resolver', () => {
  ['Fortune', 'Lesson', 'Lotto'].forEach((type) => {
    test(`${type} - no arg`, () => {
      root.Query[`${type.toLowerCase()}s`](null, {}, fakeContext);
      expect(fakeContext.dataSources.cookieAPI[`get${type}slist`]);
    });

    test(`${type} - id arg`, () => {
      root.Query[`${type.toLowerCase()}s`](null, { id: 1 }, fakeContext);
      expect(fakeContext.dataSources.cookieAPI[`getIndividual${type}`]);
    });
  });
});
