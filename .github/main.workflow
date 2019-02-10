workflow "New workflow" {
  on = "push"
  resolves = ["GraphQL Inspector"]
}

action "GraphQL Inspector" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
}
