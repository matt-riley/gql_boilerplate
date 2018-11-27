workflow "Run tests" {
  on = "push"
  resolves = ["Execute tests"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@95c1a3b"
  args = "branch master"
}

action "Install packages" {
  uses = "actions/npm@33871a7"
  needs = ["Filters for GitHub Actions"]
  args = "install"
}

action "Execute tests" {
  uses = "actions/npm@33871a7"
  needs = ["Install packages"]
  args = "run test"
}
