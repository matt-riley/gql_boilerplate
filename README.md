![GraphQL Boilerplate](assets/logo.png)

[![Beerpay](https://beerpay.io/matt-riley/gql_boilerplate/badge.svg)](https://beerpay.io/matt-riley/gql_boilerplate)

![last commit](https://badgen.net/github/last-commit/matt-riley/gql_boilerplate) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![license](https://badgen.net/badge/license/MIT/blue)

![maintainability](https://badgen.net/codeclimate/maintainability/matt-riley/gql_boilerplate) [![CodeFactor](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate/badge)](https://www.codefactor.io/repository/github/matt-riley/gql_boilerplate) [![codebeat badge](https://codebeat.co/badges/0a03b2ff-7f8b-4e93-aa7d-bea89336a26d)](https://codebeat.co/projects/github-com-matt-riley-gql_boilerplate-develop) [![Total alerts](https://img.shields.io/lgtm/alerts/g/matt-riley/gql_boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/matt-riley/gql_boilerplate/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/matt-riley/gql_boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/matt-riley/gql_boilerplate/context:javascript)

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=matt-riley/gql_boilerplate)](https://dependabot.com) ![dependencies](https://badgen.net/david/dep/matt-riley/gql_boilerplate) [![Known Vulnerabilities](https://snyk.io/test/github/matt-riley/gql_boilerplate/badge.svg?targetFile=package.json)](https://snyk.io/test/github/matt-riley/gql_boilerplate?targetFile=package.json)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmatt-riley%2Fgql_boilerplate.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmatt-riley%2Fgql_boilerplate?ref=badge_large) 

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/matt-riley/gql_boilerplate)

The purpose of this repo is to provide me with a simple boilerplate for setting up a GraphQL service.

It's 'fully featured' in so much as the correct Babel plugins, directory structure and very, very basic setup is complete.

## How to use

Click the `Use this template` button (or [here](https://github.com/matt-riley/gql_boilerplate/generate)) and fill in all of the relevant fields.

Clone your new repository.

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

An example instance can be found [here](https://gql-boilerplate.glitch.me/).

For more examples using this boilerplate have a look in the [GraphQL Examples](https://github.com/matt-riley/graphql_examples) repo.
