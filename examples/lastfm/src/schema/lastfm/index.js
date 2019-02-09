import Artist from './artist.graphql';
import Bio from './bio.graphql';
import Date from './date.graphql';
import Image from './image.graphql';
import Lastfm from './lastfm.graphql';
import Tag from './tag.graphql';
import Track from './track.graphql';
import User from './user.graphql';

export default `
  ${Artist},
  ${Bio},
  ${Date},
  ${Image},
  ${Lastfm},
  ${Tag},
  ${Track},
  ${User},
`;
