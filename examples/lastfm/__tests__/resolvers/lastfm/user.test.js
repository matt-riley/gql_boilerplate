import fakeContext from '../../../__mocks__/fakeContext';
import user from '../../../src/resolvers/lastfm/user';

// eslint-disable-next-line
jest.mock('../../../src/connectors/lastfm');

describe('User resolver', () => {
  const parentValue = {
    playlists: '0',
    playcount: '76024',
    gender: 'n',
    name: 'DonnyDarkheart',
    subscriber: '0',
    url: 'https://www.last.fm/user/DonnyDarkheart',
    country: 'United Kingdom',
    image: [
      {
        size: 'small',
        '#text': 'https://fakeprofileimg.com/1.png',
      },
      {
        size: 'medium',
        '#text': 'https://fakeprofileimg.com/1.png',
      },
      {
        size: 'large',
        '#text': 'https://fakeprofileimg.com/1.png',
      },
      {
        size: 'extralarge',
        '#text': 'https://fakeprofileimg.com/1.png',
      },
    ],
    registered: {
      unixtime: '1226230177',
      '#text': 1226230177,
    },
    type: 'user',
    age: '0',
    bootstrap: '0',
    realname: '',
  };

  test('Subscriber', () => {
    expect(user.User.subscriber(parentValue)).toBeFalsy();
  });

  test('LovedTracks', () => {
    // eslint-disable-next-line
    const lovedTracks = user.User.lovedTracks(parentValue, null, fakeContext)
    expect(fakeContext.dataSources.lastfmAPI.getUserLovedTracks).toHaveBeenCalledTimes(1);
  });

  test('RegisteredDate', () => {
    expect(user.User.registeredDate(parentValue)).toBe(parentValue.registered);
  });

  test('Recent Tracks', () => {
    // eslint-disable-next-line
    const recentTracks = user.User.recentTracks(parentValue, { limit: 10 }, fakeContext);
    expect(fakeContext.dataSources.lastfmAPI.getRecentTracks).toHaveBeenCalledTimes(1);
    expect(fakeContext.dataSources.lastfmAPI.getRecentTracks).toHaveBeenCalledWith(parentValue.name, { limit: 10 });
  });
});
