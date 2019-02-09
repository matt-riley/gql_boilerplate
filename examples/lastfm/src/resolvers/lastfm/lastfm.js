export default {
  LastFM: {
    user(_, { username }, { dataSources }) {
      return dataSources.lastfmAPI.getUserInfo(username);
    },
  },
};
