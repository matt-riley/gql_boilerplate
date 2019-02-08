export default `
  type User {
    "The users ID"
    id: ID
    "The users username"
    name: String
    "The users real name"
    realname: String
    "The url for the users Last.fm profile"
    url: String
    "The users avatar"
    image: Images
    "The country in which the user resides"
    country: String
    "The users gender"
    gender: String
    "Returns if the user is a Last.fm subscriber or not"
    subscriber: Boolean
    "The users total playcount"
    playcount: Int
    "The number of playlists the user has"
    playlists: Int
    "The date the user registered"
    registeredDate: Date
    "A list of the users loved tracks"
    lovedTracks: [Track]
    "A list of the users recently played tracks"
    recentTracks(
      "Limit the amount of recently played tracks to return"
      limit: Int,
      "The page of recently played tracks which you wish to return"
      page: Int
    ): [Track]
  }
`;
