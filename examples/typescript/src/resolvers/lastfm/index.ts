import Artist from './artist';
import Date from './date';
import Images from './images';
import LastFM from './lastfm';
import Track from './track';
import User from './user';

export default {
  ...Artist,
  ...Date,
  ...Images,
  ...LastFM,
  ...Track,
  ...User,
};
