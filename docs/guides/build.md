# Build

Most of the code is written in TypeScript. The development scripts use tools to transform TypeScript into JavaScript quickly for hot-reloading.

To run the app in production, however, you'll need to compile the code into JavaScript. The CLI guides you through this process.

## Building the Application

Run the build command from the root directory:

```bash
yarn cli build
```

The CLI will prompt you to:

1. Select which package to build (`nodePckgs` for backend or `web` for frontend)
2. Specify the environment (`local`, `staging`, or `production`)
3. Optionally provide a Google Client ID to inject into the build

## Environment Files

`yarn cli` loads `packages/backend/.env.local` before the CLI starts. That means local CLI workflows automatically use values like `BASEURL` and `LOCAL_WEB_URL` from that file.

Builds themselves use environment-specific files from `packages/backend`:

- `local` loads `.env.local`
- `staging` loads `.env.staging`
- `production` loads `.env.production`

For web builds, webpack reads the matching file from `packages/backend`. If that file does not exist, webpack falls back to the current shell environment.

For backend builds, the selected env file is copied into `build/node/.env`.

### Build Options

You can also use command-line options:

```bash
# Build web package for local development
yarn cli build web -e local

# Build web package for production
yarn cli build web -e production

# Build backend packages for staging
yarn cli build nodePckgs -e staging

# Build with a specific Google Client ID
yarn cli build web -e production -c YOUR_CLIENT_ID
```

For local builds, `BASEURL` should usually point at your local API, for example `http://localhost:3000/api`.

### Build Output

The compiled artifacts will be placed in the `/build` directory:

- Frontend build: `/build/web/` (static files ready to serve)
- Backend build: `/build/node/` (compiled JavaScript files plus the selected `.env` file)

See [the CLI page](./cli.md) for more details about the CLI commands and options.
