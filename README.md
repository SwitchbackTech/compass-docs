# Compass Docs

The source code for the Compass documentation site.

To see the Compass source code, visit: [SwitchbackTech/compass](https://github.com/SwitchbackTech/compass)

## Installation

Install doc site dependencies:

```bash
yarn
```

## Local Development

Run local doc site server:

```bash
yarn start
```

This starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

Generate static content into the `build` dir, which can be served using any static contents hosting service.

```bash
yarn build
```

### Deployment

Push to `main`, which will trigger a Vercel deployment.
