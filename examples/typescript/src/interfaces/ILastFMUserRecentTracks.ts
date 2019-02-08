import { ILastFMImage } from './ILastFMUserInfo';
import { ILastFMUserAttr } from './ILastFMUserLovedTracks';

export interface ILastFMUserRecentTrackArtist {
  mbid: string;
  '#text': string;
}

export interface ILastUserTrackAttr {
  nowplaying: string;
}

export interface ILastFMUserAlbum {
  mbid: string;
  '#text': string;
}

export interface ILastFMUserRecentTrack {
  artist: ILastFMUserRecentTrackArtist;
  '@attr': ILastUserTrackAttr;
  mbid: string;
  album: ILastFMUserAlbum;
  streamable: string;
  url: string;
  name: string;
  image: ILastFMImage[];
}

export interface ILastFMUserRecentTracks {
  '@attr': ILastFMUserAttr;
  track: ILastFMUserRecentTrack[];
}

export interface ILastFMUserRecentTracksRootObject {
  recenttracks: ILastFMUserRecentTracks;
}
