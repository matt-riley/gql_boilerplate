workflow "On Push" {
  on = "push"
  resolves = "Check GraphQL with Inspector"
}

workflow "On Pull Request" {
  on = "pull_request"
  resolves = "Check GraphQL with Inspector"
}

action "Check GraphQL with Inspector" {
  uses = "kamilkisiela/graphql-inspector@master"
  secrets = ["GITHUB_TOKEN"]
}