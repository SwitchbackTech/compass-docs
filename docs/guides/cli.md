# CLI

The Compass CLI was built to streamline common development tasks.
It exists within the `scripts` package and is run from the root directory.

## All CLI options

To see all the supported commands, run `yarn cli -h` from the root directory

```bash
$ yarn cli -h

Usage: cli [options] [command]

Options:
  -f, --force                        force operation, no cautionary prompts
  -h, --help                         display help for command

Commands:
  build [options] [nodePckgs | web]  build compass package
  delete [options]                   delete user data from compass database
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
  -e, --environment [staging | production]  specify environment
  -h, --help                                display help for command
```

## Cleaning User Data

Since user data is stored across multiple collections and involves sessions and authorization, it's often best to start from scratch when things go awry in development.

The CLI's delete workflow only deletes the user's Compass data. It does not delete their Google Calendar data.

### Steps

To delete a user's Compass data:

1. Run command

   ```bash
   yarn cli delete -u <email>
   ```

2. Confirm using your terminal prompt (press Enter)

3. Log out of Compass (press `z` and then click Logout button)

   - This forces the browser to clear the user's session cookie

4. Sign up again to start fresh

### Example Output

```text
yarn cli delete -u testuser1@gmail.com

? This will delete all Compass data for all users matching: >> testuser1@gmail.com <<
Continue? (Y/n) Yes

Okie dokie, deleting testuser1@gmail.com's Compass data ...

Deleting Compass data for users matching: testuser1@gmail.com
23-09-25 12:16:21 [debug] app:sync.service: Stopping all gcal event watches for user: 83n14f39a4fe422d472d6b99
23-09-25 12:16:24 [info] app:user.service: Deleting all data for user: 83n14f39a4fe422d472d6b99

Deleted: [
  {
    "priorities": 4,
    "calendarlist": 1,
    "events": 542,
    "eventWatches": 1,
    "syncs": 1,
    "sessions": 10,
    "user": 1
  }
]
```
