import CookiesAPI from '../../src/connectors/cookie';

describe('CookiesAPI', () => {
  let cookies;

  beforeEach(() => {
    cookies = new CookiesAPI();
  });

  ['Fortune', 'Lesson', 'Lotto'].forEach((type) => {
    describe(`get${type}sList`, () => {
      test('no args', () => {
        cookies.get = jest.fn(() => [`${type}`, `Another ${type}`]);
        const result = cookies[`get${type}sList`]({});
        expect(result).toEqual([`${type}`, `Another ${type}`]);
        expect(cookies.get).toHaveBeenCalledWith(`v1/${type.toLowerCase()}s`, {
          limit: 100,
          skip: 0,
          page: 1,
        });
      });
      test('limit arg', () => {
        cookies.get = jest.fn(() => [`${type}`, `Another ${type}`]);
        const result = cookies[`get${type}sList`]({ limit: 2 });
        expect(result).toEqual([`${type}`, `Another ${type}`]);
        expect(cookies.get).toHaveBeenCalledWith(`v1/${type.toLowerCase()}s`, {
          limit: 2,
          skip: 0,
          page: 1,
        });
      });

      test('skip arg', () => {
        cookies.get = jest.fn(() => [`${type}`, `Another ${type}`]);
        const result = cookies[`get${type}sList`]({ skip: 1 });
        expect(result).toEqual([`${type}`, `Another ${type}`]);
        expect(cookies.get).toHaveBeenCalledWith(`v1/${type.toLowerCase()}s`, {
          limit: 100,
          skip: 1,
          page: 1,
        });
      });

      test('page arg', () => {
        cookies.get = jest.fn(() => [`${type}`, `Another ${type}`]);
        const result = cookies[`get${type}sList`]({ page: 2 });
        expect(result).toEqual([`${type}`, `Another ${type}`]);
        expect(cookies.get).toHaveBeenCalledWith(`v1/${type.toLowerCase()}s`, {
          limit: 100,
          skip: 0,
          page: 2,
        });
      });
    });

    test(`getIndividual${type}`, async () => {
      cookies.get = jest.fn(() => `Individual ${type}`);
      const result = await cookies[`getIndividual${type}`]({ id: 1 });
      expect(result).toEqual([`Individual ${type}`]);
      expect(cookies.get).toHaveBeenCalledWith(`v1/${type.toLowerCase()}s/1`);
    });
  });
});
