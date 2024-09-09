# Prismock issues

This repository archives all the issue I have with [prismock](https://github.com/morintd/prismock)

# Prerequisites

This projects uses [node](https://nodejs.org), [yarn](https://yarnpkg.com/), [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/)

# Development

Install dependencies

```bash
yarn install
```

Starts postgre service

```bash
docker-compose up
```

Run the migration

```bash
yarn db:migrate
```

Execute test

```bash
yarn test
```
