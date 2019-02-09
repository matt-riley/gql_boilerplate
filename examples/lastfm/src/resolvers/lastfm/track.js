export default {
  Track: {
    id({ mbid }) {
      return mbid;
    },
    date({ date }) {
      return date;
    },
    images({ image }) {
      return image;
    },
    artist({ artist: { mbid } }, _, { dataSources }) {
      return dataSources.lastfmAPI.getArtistInfo(mbid);
    },
  },
};
