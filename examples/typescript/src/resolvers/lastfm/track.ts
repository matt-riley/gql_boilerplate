export default {
  Track: {
    id(parentValue) {
      return parentValue.mbid;
    },
    date({ date }) {
      return date;
    },
    images({ image }) {
      return image;
    },
    artist({ artist: { mbid } }, _: null, { dataSources }) {
      return dataSources.lastfmAPI.getArtistInfo(mbid);
    },
  },
};
