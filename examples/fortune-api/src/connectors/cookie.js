import { RESTDataSource } from 'apollo-datasource-rest';

export default class CookiesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://fortunecookieapi.herokuapp.com/'
  }

  async getFortunesList({ limit = 100, skip = 0, page = 1 }) {
    return await this.get('v1/fortunes', {
      limit,
      skip,
      page,
    });
  }

  async getIndividualFortune({ id }) {
    return [await this.get(`v1/fortunes/${id}`)]
  }

  async getLessonsList({ limit = 100, skip = 0, page = 1 }) {
    return await this.get('v1/lessons', {
      limit,
      skip,
      page,
    });
  }

  async getIndividualLesson({ id }) {
    return [await this.get(`v1/lessons/${id}`)]
  }

  async getLottosList({ limit = 100, skip = 0, page = 1 }) {
    return await this.get('v1/lottos', {
      limit,
      skip,
      page,
    });
  }

  async getIndividualLotto({ id }) {
    return [await this.get(`v1/lottos/${id}`)]
  }
}