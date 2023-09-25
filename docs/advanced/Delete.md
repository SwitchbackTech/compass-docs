# How to Delete User Data

Sometimes things get messy. Follow these steps delete a single user's data and start fresh.

1. Run CLI command:

   ```bash
   yarn cli -d -u <email>
   ```

2. Wait for MongoDB connection to finish (`app:mongo.service: Connected to database: 'dev_calendar'`)

3. Confirm

Output:

```bash
yarn cli -d -u testuser1@gmail.com

23-09-25 12:16:18 [debug] app:mongo.service: Connected to database: 'dev
? This will delete all Compass data for all users matching: >> testuser1@gmail.com <<
Continue? (Y/n) Yes
Okie dokie, deleting 01vendors@gmail.com's Compass data ...
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
