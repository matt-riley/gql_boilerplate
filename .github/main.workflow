workflow "On push" {
  on = "push"
  resolves = ["GraphQL Inspector on Push"]
}

action "GraphQL Inspector on Push" {
  uses = "kamilkisiela/graphql-inspector@v0.12.0"
  secrets = ["GITHUB_TOKEN"]
}

workflow "On PR" {
  on = "pull_request"
  resolves = [
    "Graphql Inspector Main",
    "Graphql Inspector Fortune",
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
