import fakeContext from '../../../__mocks__/fakeContext';
import track from '../../../src/resolvers/lastfm/track';

jest.mock('../../../src/connectors/lastfm');

describe('Track resolver', () => {
  const parentValue = {
    artist: {
      mbid: '72609007-4227-4bdd-a993-1e92df52527a',
      '#text': 'Hieroglyphics',
    },
    '@attr': {
      nowplaying: 'true',
    },
    mbid: '4d591e26-7a51-30e6-8bd1-ed26debc5dcf',
    album: {
      mbid: 'f24ad9df-f70d-438c-a3d7-abe55b40eb73',
      '#text': 'Full Circle',
    },
    streamable: '0',
    url: 'https://www.last.fm/music/Hieroglyphics/_/Halo',
    name: 'Halo',
    image: [
      {
        size: 'small',
        '#text': 'https://fakeimages.com/1.jpg',
      },
      {
        size: 'medium',
        '#text': 'https://fakeimages.com/1.jpg',
      },
      {
        size: 'large',
        '#text': 'https://fakeimages.com/1.jpg',
      },
      {
        size: 'extralarge',
        '#text': 'https://fakeimages.com/1.jpg',
      },
    ],
  };

  test('ID', () => {
    expect(track.Track.id(parentValue)).toBe(parentValue.mbid);
  });

  test('Date', () => {
    expect(track.Track.date(parentValue)).toBe(parentValue.date);
  });

  test('Image', () => {
    expect(track.Track.images(parentValue)).toBe(parentValue.image);
  });

  test('Artist', () => {
    track.Track.artist(parentValue, true, fakeContext);
    expect(fakeContext.dataSources.lastfmAPI.getArtistInfo).toHaveBeenCalled();
  });
});
