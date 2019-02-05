export default {
  Artist: {
    id({ mbid }) {
      return mbid;
    },
    images({ image }) {
      return image;
    },
    totalListeners({ stats: { listeners } }) {
      return listeners;
    },
    totalPlays({ stats: { playcount } }) {
      return playcount;
    },
    tags({ tags: { tag } }) {
      return tag;
    },
  },
};
