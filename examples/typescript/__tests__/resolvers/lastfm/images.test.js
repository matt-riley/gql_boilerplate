import images from '../../../src/resolvers/lastfm/images';

describe('Images Resolver', () => {
  const parentValue = [
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
  ];

  test('small', () => {
    expect(images.Images.small(parentValue)).toBe(parentValue[0]['#text']);
  });

  test('medium', () => {
    expect(images.Images.medium(parentValue)).toBe(parentValue[1]['#text']);
  });

  test('large', () => {
    expect(images.Images.large(parentValue)).toBe(parentValue[2]['#text']);
  });
});
