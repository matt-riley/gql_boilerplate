import { ILastFMUserLovedtrackTrack } from '../../interfaces/ILastFMUserLovedTracks';

export default {
  Track: {
    id({ mbid }: { mbid: string }) {
      return mbid;
    },
    date({ date }: { date: string }) {
      return date;
    },
    images({ image }: { image: string }) {
      return image;
    },
    artist({ artist: { mbid } }: { artist: { mbid: string } }, _: null, { dataSources }: { dataSources: any }) {
      return dataSources.lastfmAPI.getArtistInfo(mbid);
    },
  },
};
