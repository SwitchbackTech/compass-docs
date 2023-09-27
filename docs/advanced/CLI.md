# How to use the CLI

The Compass CLI was built to streamline common development tasks.
It exists within the `scripts` package and is run from the root directory.

## All CLI options

To see all the supported commands, run `yarn cli -h` from the root directory

```bash
# example output from 9.2023. Options may have changed.

yarn cli -h

Usage: cli [options]


Options:
  -b, --build                            builds packages
  -d, --delete                           deletes users data from compass database
  -e --environment <environment>         specify environment (`Category_VM` value)
  -f, --force                            forces operation, no cautionary prompts
  -p, --packages [pkgs...]               specifies which packages to build
  -u, --user <id>                        specifies which user to run script for
  -h, --help                             display help for command
```

## Cleaning User Data

Since user data is stored across multiple collections and involves sessions and authorization, it's often best to start from scratch when things go awry in development.

The CLI's delete workflow only deletes the user's Compass data. It does not delete their Google Calendar data.

### Steps

To delete a user's Compass data:

1. Run command

   ```bash
   yarn cli -d -u <email>
   ```

2. Wait for MongoDB connection to finish

   ```bash
   # wait until you see this inline in your terminal:
   app:mongo.service: Connected to database: 'dev_calendar'
   ```

3. Confirm using your terminal prompt (press Enter)

4. Log out of Compass (press `z` and then click Logout button)

   - This forces the browser to clear the user's session cookie

5. Sign up again to start fresh

### Example Output

```bash
yarn cli -d -u testuser1@gmail.com

23-09-25 12:16:18 [debug] app:mongo.service: Connected to database: 'dev
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
