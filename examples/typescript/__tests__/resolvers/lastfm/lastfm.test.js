import lastfm from '../../../src/resolvers/lastfm/lastfm';
import fakeContext from '../../../__mocks__/fakeContext';

jest.mock('../../../src/connectors/lastfm');

describe('LastFM resolver', () => {
  test('user', () => {
    lastfm.LastFM.user(null, { username: 'SeanP' }, fakeContext);
    expect(fakeContext.dataSources.lastfmAPI.getUserInfo).toHaveBeenCalledTimes(1);
  });
});
