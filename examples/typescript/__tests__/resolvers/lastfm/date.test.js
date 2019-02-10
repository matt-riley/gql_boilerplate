import date from '../../../src/resolvers/lastfm/date';

describe('Date resolver', () => {
  const parentValueUts = {
    uts: '1549736041',
    '#text': '09 Feb 2019, 18:14',
  };

  const parentValueUnixTime = {
    unixtime: '1226230177',
    '#text': '1226230177',
  };

  test('date - uts', () => {
    expect(date.Date.date(parentValueUts)).toBe(parentValueUts.uts);
  });

  test('date - unixtime', () => {
    expect(date.Date.date(parentValueUnixTime)).toBe(parentValueUnixTime.unixtime);
  });

  test('text', () => {
    expect(date.Date.text(parentValueUts)).toBe(parentValueUts['#text']);
  });
});
