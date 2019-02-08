export default {
  LastFM: {
    user(_: null, { username }: { username: string }, { dataSources }: { dataSources: any }) {
      return dataSources.lastfmAPI.getUserInfo(username);
    },
  },
};
