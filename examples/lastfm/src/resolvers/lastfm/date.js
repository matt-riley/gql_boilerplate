export default {
  Date: {
    date(parentValue) {
      return parentValue.uts || parentValue.unixtime;
    },
    text(parentValue) {
      return parentValue['#text'];
    },
  },
};
