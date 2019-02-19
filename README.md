![GraphQL](https://badgen.net/badge/GraphQL/Boilerplate/pink?icon=graphql) ![last commit](https://badgen.net/github/last-commit/matt-riley/gql_boilerplate) ![dependencies](https://badgen.net/david/dep/matt-riley/gql_boilerplate) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![license](https://badgen.net/badge/license/MIT/blue)

![maintainability](https://badgen.net/codeclimate/maintainability/matt-riley/gql_boilerplate) [![CodeFactor](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate/badge)](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate) [![Known Vulnerabilities](https://snyk.io/test/github/matt-riley/gql_boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matt-riley/gql_boilerplate?targetFile=package.json) [![CircleCI](https://circleci.com/gh/matt-riley/gql_boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/matt-riley/gql_boilerplate/tree/master)
# GraphQL Boilerplate

The purpose of this repo is to provide myself with a simple boilerplate for setting up a GraphQL service.

It's 'fully featured' in so much as the correct Babel plugins, directory structure and very, very basic setup is complete.

## How to use

Clone the repo and cd into the directory.

```bash
rm -rf .git
```

This will allow you to reinitialise git and make it unique for your project.

Then:

```bash
yarn install
```
or
```bash
npm install
```

To grab all of the packages.

```bash
yarn start
```

or

```bash
npm start
```

This will start the server locally and GraphQL Playground will be available at [http://localhost:3000](http://localhost:3000)

The only query possible with this boilerplate is:
```
{
  me
}
```

The response should be:
```json
{
  "data": {
    "me": "foobar"
  }
}
```
