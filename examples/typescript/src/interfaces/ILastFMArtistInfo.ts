import { ILastFMImage } from './ILastFMUserInfo';

export interface ILastFMArtistStats {
  listeners: string;
  playcount: string;
}

export interface ILastFMArtistSimilarArtist {
  name: string;
  url: string;
  image: ILastFMImage[];
}

export interface ILastFMArtistSimilarArtists {
  artist: ILastFMArtistSimilarArtist[];
}

export interface ILastFMArtistTag {
  name: string;
  url: string;
}

export interface ILastFMArtistTags {
  tag: ILastFMArtistTag[];
}

export interface ILastFMArtistLink {
  '#text': string;
  rel: string;
  href: string;
}

export interface ILastFMArtistLinks {
  link: ILastFMArtistLink;
}

export interface ILastFMArtistBio {
  links: ILastFMArtistLinks;
  published: string;
  summary: string;
  content: string;
}

export interface ILastFMArtist {
  name: string;
  mbid: string;
  url: string;
  image: ILastFMImage[];
  streamable: string;
  ontour: string;
  stats: ILastFMArtistStats;
  similar: ILastFMArtistSimilarArtists;
  tags: ILastFMArtistTags;
  bio: ILastFMArtistBio;
}

export interface ILastFMArtistRootObject {
  artist: ILastFMArtist;
}
