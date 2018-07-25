export default {
  User: {
    subscriber(pv) {
      return (pv.subscriber === '0') ? false : true 
    },
    lovedTracks(pv, _,  { dataSources }) {
      return dataSources.lastfmAPI.getUserLovedTracks(pv.name)
    }
  }
}