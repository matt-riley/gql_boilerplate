import CookiesAPI from '../src/connectors/cookie';

const fakeContext = {
  dataSources: {
    cookieAPI: new CookiesAPI(),
  },
};

export default fakeContext;
