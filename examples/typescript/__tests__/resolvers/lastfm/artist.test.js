import artist from '../../../src/resolvers/lastfm/artist';

describe('Artist resolver fields', () => {
  const parentValue = {
    name: 'Sean Price',
    mbid: 'c659f049-6d66-4b4e-b33e-f0991f287d34',
    url: 'https://www.last.fm/music/Sean+Price',
    image: [
      {
        '#text': 'https://smallimage.com/1.png',
        size: 'small',
      },
      {
        '#text': 'https://mediumimage.com/1.png',
        size: 'medium',
      },
      {
        '#text': 'https://largeimage.com/1.png',
        size: 'large',
      },
      {
        '#text': 'https://extralargeimage.com/1.png',
        size: 'extralarge',
      },
      {
        '#text': 'https://megaimage.com/1.png',
        size: 'mega',
      },
    ],
    streamable: '0',
    ontour: '0',
    stats: {
      listeners: '131055',
      playcount: '2565614',
    },
    tags: {
      tag: [
        {
          name: 'Hip-Hop',
          url: 'https://www.last.fm/tag/Hip-Hop',
        },
        {
          name: 'rap',
          url: 'https://www.last.fm/tag/rap',
        },
        {
          name: 'underground hip-hop',
          url: 'https://www.last.fm/tag/underground+hip-hop',
        },
        {
          name: 'boot camp clik',
          url: 'https://www.last.fm/tag/boot+camp+clik',
        },
      ],
    },
  };

  test('id', () => {
    expect(artist.Artist.id(parentValue)).toBe(parentValue.mbid);
  });

  test('images', () => {
    expect(artist.Artist.images(parentValue)).toBe(parentValue.image);
  });

  test('totalListeners', () => {
    expect(artist.Artist.totalListeners(parentValue)).toBe(parentValue.stats.listeners);
  });

  test('totalPlays', () => {
    expect(artist.Artist.totalPlays(parentValue)).toBe(parentValue.stats.playcount);
  });

  test('tags', () => {
    expect(artist.Artist.tags(parentValue)).toBe(parentValue.tags.tag);
  });
});
