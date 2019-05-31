![GraphQL Boilerplate](assets/logo.png)

![last commit](https://badgen.net/github/last-commit/matt-riley/gql_boilerplate) ![dependencies](https://badgen.net/david/dep/matt-riley/gql_boilerplate) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![license](https://badgen.net/badge/license/MIT/blue)

![maintainability](https://badgen.net/codeclimate/maintainability/matt-riley/gql_boilerplate) [![CodeFactor](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate/badge)](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate) [![Known Vulnerabilities](https://snyk.io/test/github/matt-riley/gql_boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matt-riley/gql_boilerplate?targetFile=package.json) [![CircleCI](https://circleci.com/gh/matt-riley/gql_boilerplate/tree/master.svg?style=svg)](https://circleci.com/gh/matt-riley/gql_boilerplate/tree/master)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/matt-riley/gql_boilerplate)

The purpose of this repo is to provide me with a simple boilerplate for setting up a GraphQL service.

It's 'fully featured' in so much as the correct Babel plugins, directory structure and very, very basic setup is complete.

## How to use

```bash
npx degit matt-riley/gql_boilerplate <name_of_your_directory>
```

Go into the directory which contains the boilerplate:

```bash
cd <name_of_your_directory>
```

Install all of the packages:

```bash
npm install
```

Start the server:

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
```JSON
{
  "data": {
    "me": "foobar"
  }
}
```

For more examples using this boilerplate have a look in the [GraphQL Examples](https://github.com/matt-riley/graphql_examples) repo.
