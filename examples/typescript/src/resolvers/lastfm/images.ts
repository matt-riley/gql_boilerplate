import { ILastFMImage } from '../../interfaces/ILastFMUserInfo';

function getImage(pv: ILastFMImage[], size: string): string {
  const image: ILastFMImage | undefined = pv.find((img) => img.size === size);
  if (typeof image !== undefined) { return image!['#text']; }
  return '';
}

export default {
  Images: {
    small(parentValue: ILastFMImage[]): string {
      return getImage(parentValue, 'small');
    },
    medium(parentValue: ILastFMImage[]) {
      return getImage(parentValue, 'medium');
    },
    large(parentValue: ILastFMImage[]) {
      return getImage(parentValue, 'large');
    },
  },
};
