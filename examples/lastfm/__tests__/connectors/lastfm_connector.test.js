import LastFMAPI from '../../src/connectors/lastfm';

describe('LastFMAPI', () => {
  let lastfm;
  beforeEach(() => {
    lastfm = new LastFMAPI();
    lastfm.willSendRequest = jest.fn(() => 'Wat');
  });

  test('getUserInfo', async () => {
    lastfm.get = jest.fn(() => {
      const data = {
        user: 'Rakim',
      };
      return data;
    });
    const result = await lastfm.getUserInfo('Rakim');
    expect(lastfm.get).toHaveBeenCalledWith('2.0/', {
      method: 'user.getinfo',
      user: 'Rakim',
    });
    expect(result).toBe('Rakim');
  });

  test('getUserLovedTracks', async () => {
    lastfm.get = jest.fn(() => {
      const data = {
        lovedtracks: {
          track: 'Hey Young World',
        },
      };
      return data;
    });
    const result = await lastfm.getUserLovedTracks('Slick Rick');
    expect(lastfm.get).toHaveBeenCalledWith('2.0/', {
      method: 'user.getlovedtracks',
      user: 'Slick Rick',
    });
    expect(result).toBe('Hey Young World');
  });

  test('getRecentTracks', async () => {
    lastfm.get = jest.fn(() => {
      const data = {
        recenttracks: {
          track: 'Saturday Nite',
        },
      };
      return data;
    });
    const result = await lastfm.getRecentTracks('Masta Ace', { limit: 5, page: 1 });
    expect(lastfm.get).toHaveBeenCalledWith('2.0/', {
      method: 'user.getrecenttracks',
      user: 'Masta Ace',
      limit: 5,
      page: 1,
    });
    expect(result).toBe('Saturday Nite');
  });

  test('getArtistInfo', async () => {
    lastfm.get = jest.fn(() => {
      const data = {
        artist: 'Kool G Rap',
      };
      return data;
    });
    const result = await lastfm.getArtistInfo('12345');
    expect(lastfm.get).toHaveBeenCalledWith('2.0/', {
      method: 'artist.getinfo',
      mbid: '12345',
    });
    expect(result).toBe('Kool G Rap');
  });
});
