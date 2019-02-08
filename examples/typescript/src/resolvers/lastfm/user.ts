import { Subscriber } from '../../enums/subscriber';

export default {
  User: {
    subscriber({ subscriber }: { subscriber: string }) {
      if (Subscriber[parseInt(subscriber, 10)] === 'true') { return true; }
      return false;
    },
    lovedTracks({ name }: { name: string }, _: null, { dataSources }: { dataSources: any }) {
      return dataSources.lastfmAPI.getUserLovedTracks(name);
    },
    registeredDate({ registered }: { registered: string }) {
      return registered;
    },
    recentTracks({ name }: { name: string }, args: any, { dataSources }: { dataSources: any }) {
      return dataSources.lastfmAPI.getRecentTracks(name, args);
    },
  },
};
