export default {
  LastFM: {
    user(_: null, { username }: { username: string }, { dataSources }) {
      return dataSources.lastfmAPI.getUserInfo(username);
    },
  },
};
