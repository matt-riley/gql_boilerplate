import CookiesAPI from './cookie';

const dataSources = () => {
  return {
    cookieAPI: new CookiesAPI(),
  };
};

export default dataSources;
