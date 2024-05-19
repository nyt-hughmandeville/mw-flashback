# Flashback Quizzes

This project contains some flashback quiz ideas.

- <https://nyt-hughmandeville.github.io/mw-flashback/>

## Links

- [GitHub Action](https://github.com/nyt-hughmandeville/mw-flashback/actions)
- [GitHub Pages](https://nyt-hughmandeville.github.io/mw-flashback/)

## Files & Directories

```text
  .gitignore             - files for Git to ignore
  Makefile               - make commands
  README.md              - project's README
  client/                - Next.js code
```

## Pages

### Flashback Quizzes

TBD

## Running Locally

Use `make` to start the web server.

```sh
make run
```

## Running Static Site

First build the static site.

```sh
make build
```

The `serve` command needs to have been installed.

```sh
sudo npm install -g serve
```

Then start the static site.

```sh
make run-static
```

## Updating Dependencies

```sh
make dep-update
```

## Dependencies

Depends on [react-select](https://www.npmjs.com/package/react-select).

```sh
npm add gh-pages
npm add pretty-lights
npm add react-select
```

## Project Setup

See the [Next.js setup doc](https://nextjs.org/learn/basics/deploying-nextjs-app/setup).

```sh
npx create-next-app@latest client --use-npm --js --app
```

## Quizzes

- Art Quiz
- Architecture: NY Bridges Quiz
- Architecture: NY Buildings Quiz
- Architecture: NY Parks Quiz
- Books Quiz
- Music Quiz
- Hard Fork Quiz
- Automobile Quiz
- Movie Quiz
- Broadway Play Quiz
- Population: Countries Quiz
- Population: US Cities Quiz
- Population: World Cities Quiz
