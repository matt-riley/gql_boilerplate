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

action "Modified ./schema File Filter" {
  uses = "nholden/modified-file-filter-action@1.0"
  args = "schema.graphql"
  secrets = ["GITHUB_TOKEN"]
}

action "Graphql Inspector Main" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  needs = ["Modified ./schema File Filter"]
  secrets = ["GITHUB_TOKEN"]
}

action "Modified examples/fortune-api/schema File Filter" {
  uses = "nholden/modified-file-filter-action@1.0"
  args = "examples/fortune-api/schema.graphql"
  secrets = ["GITHUB_TOKEN"]
}

action "Graphql Inspector Fortune" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  needs = ["Modified examples/fortune-api/schema File Filter"]
  secrets = ["GITHUB_TOKEN"]
  args = "examples/fortune-api/schema.graphql"
}

action "Modified examples/lastfm/schema File Filter" {
  uses = "nholden/modified-file-filter-action@1.0"
  args = "examples/lastfm/schema.graphql"
  secrets = ["GITHUB_TOKEN"]
}

action "Graphql Inspector Lastfm" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  needs = ["Modified examples/lastfm/schema File Filter"]
  secrets = ["GITHUB_TOKEN"]
  args = "examples/lastfm/schema.graphql"
}

action "Modified examples/typescript/schema File Filter" {
  uses = "nholden/modified-file-filter-action@1.0"
  args = "examples/lastfm/schema.graphql"
  secrets = ["GITHUB_TOKEN"]
}

action "Graphql Inspector Typescript" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  needs = ["Modified examples/typescript/schema File Filter"]
  secrets = ["GITHUB_TOKEN"]
  args = "examples/typescript/schema.graphql"
}
