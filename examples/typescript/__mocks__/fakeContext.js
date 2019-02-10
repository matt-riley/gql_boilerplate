import LastFMAPI from '../src/connectors/lastfm';

const fakeContext = {
  dataSources: {
    lastfmAPI: new LastFMAPI(),
  },
};

export default fakeContext;
