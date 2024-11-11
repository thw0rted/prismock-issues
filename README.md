# Prismock issues

This repository archives all the issue I have with [prismock](https://github.com/morintd/prismock)

# Prerequisites

This projects uses [node](https://nodejs.org) / NPM, [docker](https://www.docker.com/), and [docker-compose](https://docs.docker.com/compose/)

# Development

Install dependencies

```bash
npm install
```

Starts postgre service

```bash
docker-compose up
```

Run the migration

```bash
npm run db:migrate
```

Demonstrate actual Prisma behavior

```bash
node index.mjs
```

Execute test

```bash
npm run test
```
