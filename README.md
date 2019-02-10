# github-issues-clone

A GitHub issues page clone using React, Redux, and GitHub's GraphQL API.

See the [demo](http://tangy-leather.surge.sh/).

## Install

Create a new personal access token as outlined [here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

```
$ git clone https://github.com/msimmer/github-issues-clone.git
$ cd github-issues-clone && echo "export REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=xxxxx" >> env.sh
$ npm i
```

## Run 

```
$ . ./env.sh && npm start
```

## Test

```
$ npm test
```

## Build

```
$ . ./env.sh && npm build
```
