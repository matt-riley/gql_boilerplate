export default {
  User: {
    subscriber({ subscriber }) {
      return (subscriber === '0') ? false : true;
    },
    lovedTracks({ name }, _: null, { dataSources }) {
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
