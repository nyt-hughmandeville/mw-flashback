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

- Architecture: NY Bridges (done)
- Architecture: NY Buildings (done)
- Architecture: NY Museums
- Architecture: NY Parks
- Art: Modern (done)
- Automobiles: TV & Film (done)
- Books: Classics (done)
- Broadway: Musicals (done)
- Movies: Film Noir (done)
- Music: Electronic (done)
- Population: Countries
- Population: US Cities (done)
- Population: World Cities
- Computers: Personal Computers
- Computers: Game Systems
- Computers: Games
