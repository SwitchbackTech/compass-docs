# CLI

The Compass CLI streamlines builds and a small set of maintenance workflows. Run it from the root directory.

## All CLI options

To see all the supported commands, run `yarn cli --help` from the root directory

```bash
$ yarn cli -h

Usage: cli [options] [command]

Options:
  -f, --force                        force operation, no cautionary prompts
  -h, --help                         display help for command

Commands:
  build [options] [nodePckgs | web]  build compass package
  delete [options]                   delete user data from compass database
  migrate [options]                   run database schema migrations
  seed [options]                      run seed migrations to populate the database with data
  help [command]                     display help for command
```

To see the options for a specific command, run `yarn cli <command> -h`

```bash
$ yarn cli build -h

Usage: cli build [options] [nodePckgs | web]

build compass package

Arguments:
  nodePckgs | web                           package to build (only provide 1)

Options:
  -c, --clientId <clientId>                 google client id to inject into build
  -e, --environment [local | staging | production]  specify environment
  -h, --help                                display help for command
```

## Supported Commands

The current CLI focuses on four areas:

- `build`: create production-style web or node package builds
- `delete`: remove a user's Compass data
- `migrate`: manage database schema migrations
- `seed`: run database seeder flows

## Build

Use the build command when you need compiled output rather than the hot-reloading dev workflow.

```bash
yarn cli build web --environment staging --clientId "test-client-id"
yarn cli build nodePckgs --environment staging
```

Use `web` for frontend build artifacts and `nodePckgs` for compiled node packages.

## Cleaning User Data

Since user data is stored across multiple collections and involves sessions and authorization, it's often best to start from scratch when things go awry in development.

The CLI's delete workflow deletes the user's Compass data from the backend database. It also provides an automated way to clear browser-side data (session cookies, localStorage, and IndexedDB).

The CLI's delete workflow only deletes the user's Compass data. It does not delete their Google Calendar data.

### Steps

To delete a user's Compass data:

1. Run command

   ```bash
   yarn cli delete -u <email>
   ```

2. Confirm using your terminal prompt (press Enter)

3. After backend deletion completes, you'll be prompted to clear browser data:

4. If you confirm, it'll open the provided cleanup URL in your browser:

   - The cleanup page will automatically:
     - Log you out of your session
     - Clear all localStorage data
     - Delete the IndexedDB database
     - Redirect you to the login page

5. Sign up again to start fresh

### Force Mode

For automated workflows, use the `--force` flag to skip all confirmation prompts:

```bash
yarn cli delete -u <email> --force
```

When using `--force`, the CLI will:

- Delete all data immediately (no confirmation prompt)
- Automatically open the browser to the cleanup page (no prompt asking if you want to clean browser data)

### Manual Cleanup

If you skip the cleanup during account deletion, you can manually visit the cleanup URL later:

- **Local**: `http://localhost:9080/cleanup` (or your dev server port)

The cleanup will run automatically when you visit the URL.

## Database Migrations

The CLI wraps the repo's migration and seeding flows.

### Running Migrations

```bash
yarn cli migrate pending
yarn cli migrate up
yarn cli migrate executed
```

Common subcommands include `up`, `down`, `pending`, `executed`, and `create`.

### Seeding the Database

```bash
yarn cli seed <subcommand>
```

Use seed commands for database seeder flows built on the same framework as migrations.

## Safety Tips

- Treat `delete` as destructive.
- Read the command help before running unfamiliar migration or seed operations.
- Confirm whether you need `web` or `nodePckgs` before building.
