# Jacob Walls | full-stack developer


### Requirements

- Docker version of 20.10.17 or higher.
- Docker Compose V2 (included in [Docker Desktop](https://www.docker.com/products/docker-desktop/) or via the [compose plugin](https://docs.docker.com/compose/install/)).

### Getting Started

```sh
./scripts/update
```

#### Development

Rebuild Docker images and run application.

```sh
./scripts/update
./scripts/server
```

### Ports

| Service                   | Port                            |
| ------------------------- | ------------------------------- |
| Webpack Dev Server        | [`8765`](http://localhost:8765) |

### Adding new JS/TS Packages

To add a new package to the project:

```sh
./scripts/yarn add package-name
```

### Upgrading JS/TS dependencies

The update script uses a `--frozen-lockfile` flag so when packages need an upgrade:

```sh
# Manually change the package.json to upgrade the version and run:

./scripts/yarn install
```

### Use Typescript file watching

Watch for TypeScript changes and list all errors
```sh
./scripts/yarn tsc --watch
```
