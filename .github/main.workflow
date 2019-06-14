workflow "Run Tests" {
  on = "pull_request"
  resolves = ["npm cit"]
}

action "npm cit" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm cit"
}
