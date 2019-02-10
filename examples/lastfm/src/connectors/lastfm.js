import { RESTDataSource } from 'apollo-datasource-rest';

export default class LastFMAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://ws.audioscrobbler.com/';
  }

  willSendRequest(request) {
    request.params.set('api_key', this.context.apiKey);
    request.params.set('format', 'json');
  }

  async getUserInfo(user) {
    const data = await this.get('2.0/', {
      method: 'user.getinfo',
      user,
    });

    return data.user;
  }

  async getUserLovedTracks(user) {
    const data = await this.get('2.0/', {
      method: 'user.getlovedtracks',
      user,
    });
    return data.lovedtracks.track;
  }

  async getRecentTracks(user, { limit, page }) {
    const data = await this.get('2.0/', {
      method: 'user.getrecenttracks',
      user,
      limit,
      page,
    });
    return data.recenttracks.track;
  }

  async getArtistInfo(mbid) {
    const data = await this.get('2.0/', {
      method: 'artist.getinfo',
      mbid,
    });
    return data.artist;
  }
}
