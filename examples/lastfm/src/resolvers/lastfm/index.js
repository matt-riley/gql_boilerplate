import LastFM from './lastfm';
import User from './user';
import Track from './track';
import Date from './date';
import Images from './images';

export default {
  ...LastFM,
  ...User,
  ...Track,
  ...Date,
  ...Images,
}