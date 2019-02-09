export default {
  User: {
    subscriber({ subscriber }) {
      return subscriber !== '0';
    },
    lovedTracks({ name }, _, { dataSources }) {
      return dataSources.lastfmAPI.getUserLovedTracks(name);
    },
    registeredDate({ registered }) {
      return registered;
    },
    recentTracks({ name }, args, { dataSources }) {
      return dataSources.lastfmAPI.getRecentTracks(name, args);
    },
  },
};
