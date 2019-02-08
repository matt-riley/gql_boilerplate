export default `
  type LastFM {
    "The last.fm user"
    user(
      "The last.fm username, this **must** be passed into the query else it will fail"
      username: String!
    ): User
}
`;
