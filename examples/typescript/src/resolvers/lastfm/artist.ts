import { ILastFMArtistTag } from '../../interfaces/ILastFMArtistInfo';

export default {
  Artist: {
    id({ mbid }: { mbid: string }) {
      return mbid;
    },
    images({ image }: { image: string }) {
      return image;
    },
    totalListeners({ stats: { listeners } }: { stats: { listeners: string } }) {
      return listeners;
    },
    totalPlays({ stats: { playcount } }: { stats: { playcount: string } }) {
      return playcount;
    },
    tags({ tags: { tag } }: { tags: { tag: ILastFMArtistTag[] } }) {
      return tag;
    },
  },
};
