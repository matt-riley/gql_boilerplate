workflow "On push" {
  on = "push"
  resolves = [
    "Graphql Inspector Main",
    "Graphql Inspector Fortune",
    "Graphql Inspector Lastfm",
    "Graphql Inspector Typescript",
  ]
}

workflow "On PR" {
  on = "pull_request"
  resolves = [
    "Graphql Inspector Main",
    "Graphql Inspector Fortune",
    "Graphql Inspector Lastfm",
    "Graphql Inspector Typescript",
  ]
}

action "Graphql Inspector Typescript" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
  args = "examples/typescript/schema.graphql"
}

action "Graphql Inspector Lastfm" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
  args = "examples/lastfm/schema.graphql"
}

action "Graphql Inspector Fortune" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
  args = "examples/fortune-api/schema.graphql"
}

action "Graphql Inspector Main" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
}
