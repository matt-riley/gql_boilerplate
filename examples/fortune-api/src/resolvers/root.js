export default {
  Query: {
    fortunes(_, args, { dataSources }) {
      if (args.id) {
        return dataSources.cookieAPI.getIndividualFortune(args);
      }
      return dataSources.cookieAPI.getFortunesList(args);
    },
    lessons(_, args, { dataSources }) {
      if (args.id) {
        return dataSources.cookieAPI.getIndividualLesson(args);
      }
      return dataSources.cookieAPI.getLessonsList(args);
    },
    lottos(_, args, { dataSources }) {
      if (args.id) {
        return dataSources.cookieAPI.getIndividualLotto(args);
      }
      return dataSources.cookieAPI.getLottosList(args);
    },
  },
};
