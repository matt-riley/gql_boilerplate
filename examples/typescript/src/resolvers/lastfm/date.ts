import { ILastFMUserRegistered } from '../../interfaces/ILastFMUserInfo';
import { ILastFMUserLovedtrackDate } from '../../interfaces/ILastFMUserLovedTracks';

function isRegistered(object: any): object is ILastFMUserRegistered {
  return 'unixtime' in object;
}

export default {
  Date: {
    date(parentValue: ILastFMUserLovedtrackDate | ILastFMUserRegistered) {
      if (isRegistered(parentValue)) {
        return parentValue.unixtime;
      } else {
        return parentValue.uts;
      }
    },
    text(parentValue: ILastFMUserLovedtrackDate | ILastFMUserRegistered) {
      return parentValue['#text'];
    },
  },
};
