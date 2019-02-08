import LastFMAPI from './lastfm';

const dataSources = () => {
  return {
    lastfmAPI: new LastFMAPI(),
  };
};

export default dataSources;
