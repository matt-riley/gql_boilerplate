import { ILastFMImage } from './ILastFMUserInfo';

export interface ILastFMUserAttr {
  page: string;
  perPage: string;
  user: string;
  total: string;
  totalPages: string;
}

export interface ILastFMUserLovedtrackArtist {
  url: string;
  name: string;
  mbid: string;
}

export interface ILastFMUserLovedtrackDate {
  uts: string;
  '#text': string;
}

export interface ILastFMTrackStreamable {
  fulltrack: string;
  '#text': string;
}

export interface ILastFMUserLovedtrackTrack {
  artist: ILastFMUserLovedtrackArtist;
  mbid: string;
  date: ILastFMUserLovedtrackDate;
  url: string;
  image: ILastFMImage[];
  name: string;
  streamable: ILastFMTrackStreamable;
}

export interface ILastFMUserLovedtrack {
  '@attr': ILastFMUserAttr;
  track: ILastFMUserLovedtrack[];
}

export interface ILastFMUserLovedTracksRootObject {
  lovedtracks: ILastFMUserLovedtrack;
}
