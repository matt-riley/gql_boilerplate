export default {
  Date: {
    date(parentValue) {
      return parentValue.uts
    },
    text(parentValue) {
      return parentValue['#text'];
    }
  }
}