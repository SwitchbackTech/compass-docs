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
2. Specify the environment (`staging` or `production`)
3. Optionally provide a Google Client ID to inject into the build

### Build Options

You can also use command-line options:

```bash
# Build web package for production
yarn cli build web -e production

# Build backend packages for staging
yarn cli build nodePckgs -e staging

# Build with a specific Google Client ID
yarn cli build web -e production -c YOUR_CLIENT_ID
```

### Build Output

The compiled artifacts will be placed in the `/build` directory:

- Frontend build: `/build/packages/web/` (static files ready to serve)
- Backend build: `/build/packages/backend/` (compiled JavaScript files)

See [the CLI page](./cli.md) for more details about the CLI commands and options.
