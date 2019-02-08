export interface ILastFMImage {
  size: string;
  '#text': string;
}

export interface ILastFMUserRegistered {
  unixtime: string;
  '#text': number;
}

export interface ILastFMUser {
  playlists: string;
  playcount: string;
  gender: string;
  name: string;
  subscriber: string;
  url: string;
  country: string;
  image: ILastFMImage[];
  registered: ILastFMUserRegistered;
  type: string;
  age: string;
  bootstrap: string;
  realname: string;
}

export interface ILastFMUserRootObject {
  user: ILastFMUser;
}
