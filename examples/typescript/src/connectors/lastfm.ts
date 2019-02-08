import { RESTDataSource } from 'apollo-datasource-rest';
import { ILastFMArtist, ILastFMArtistRootObject } from '../interfaces/ILastFMArtistInfo';
import { ILastFMUser, ILastFMUserRootObject } from '../interfaces/ILastFMUserInfo';
import { ILastFMUserLovedtrack, ILastFMUserLovedTracksRootObject } from '../interfaces/ILastFMUserLovedTracks';
import { ILastFMUserRecentTrack, ILastFMUserRecentTracksRootObject } from '../interfaces/ILastFMUserRecentTracks';

export default class LastFMAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://ws.audioscrobbler.com';
  }

  public async getUserInfo(user: string): Promise<ILastFMUser> {
    const data: ILastFMUserRootObject = await this.get('2.0/', {
      method: 'user.getinfo',
      user,
    });
    return data.user;
  }

  public async getUserLovedTracks(user: string): Promise<ILastFMUserLovedtrack[]> {
    const data: ILastFMUserLovedTracksRootObject = await this.get('2.0/', {
      method: 'user.getlovedtracks',
      user,
    });
    return data.lovedtracks.track;
  }

  public async getRecentTracks(user: string, { limit, page }: { limit: number, page: number }):
    Promise<ILastFMUserRecentTrack[]> {
    const data: ILastFMUserRecentTracksRootObject = await this.get('2.0/', {
      limit,
      method: 'user.getrecenttracks',
      page,
      user,
    });

    return data.recenttracks.track;
  }

  public async getArtistInfo(mbid: string): Promise<ILastFMArtist> {
    const data: ILastFMArtistRootObject = await this.get('2.0/', {
      mbid,
      method: 'artist.getinfo',
    });

    return data.artist;
  }

  public willSendRequest(request: any) {
    request.params.set('api_key', this.context.apiKey);
    request.params.set('format', 'json');
  }

}
