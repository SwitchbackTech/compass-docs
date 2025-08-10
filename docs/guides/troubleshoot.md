# Troubleshoot

## Unable to Sign In with Google in Local Compass Instance

### Missing User id

When you encounter a missing user id , it is because compass is not connected to your mongo database and there are no records of any user stored. The reason is because you are not connected to the mongo database. Sometimes the mongo db is successfully connected when you run yarn dev:backend but still a missing user id! Why that? I found out that I was missing Mongo db in my machine so I had to install and run `mongod --version` to see if you have mongo db in your machine.

If you use Ubuntu OS you can follow the following steps. However,if you use windows or other OS while running compass, follow this [installation](https://www.mongodb.com/docs/manual/installation/) for `mongodb`

Update the APT packages index

```sh
sudo apt update
```

Import the public key used by the package management system

```sh
sudo apt-get install gnupg curl
```

Create a list file for MongoDB

```sh
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

Reload local package database

```sh
sudo apt-get update
```

Install the MongoDB packages

```sh
sudo apt-get install -y mongodb-org

```

Confirm you have mongo db in your machine

```sh
mongod --version
```

### Mismatch User Id

When you encounter a mismatch user id, the user is in your mongo collection is not the one being captured. This could be because you have duplicate users in your database. In order to fix this you need to clear your user data using this [troubleshooting doc](../guides/troubleshoot.md#mismatch-user-id)

### Invalid domain name

When encountering invalid domain name, this is because the url you provided in the `SUPERTOKENS_..` value in your .env file is incorrect. This could be caused by you prematurely finished setting up your Supertokens. Please make sure to completely set up your Supertokens, then copy your assigned api key and url.

## Duplicate Compass Events Issue

### Duplicate events appearing on calendar

When duplicate Compass events are created that reference the same Google Calendar event ID, you may notice:

- Duplicate events showing up in your calendar even though you didn't create them
- Events continue duplicating when you refresh the page during sync
- Deleting one duplicate event causes all duplicate events (and possibly the original) to be deleted
- The app becomes unusable due to sync failures with MongoDB positional operators

This issue typically occurs when:
1. Your user session expires while using Compass
2. You revisit Compass and the backend starts importing your events
3. You refresh the page during the import process

### Resolution

To resolve this issue, you can run the CLI script to merge duplicate sync data:

```sh
npm run cli -- merge-duplicate-sync
```

Or to run without interactive prompts:

```sh
npm run cli -- merge-duplicate-sync --force
```

This script will:
- Identify users with duplicate sync records in the database
- Merge the duplicate records using unique identifiers
- Remove duplicates while preserving all unique calendar and event data
- Use database transactions to ensure data integrity

**Note**: This is a temporary solution for local development environments. The team is working on a permanent fix to prevent this issue from occurring in the first place.

### Additional Context

For more details about this issue and the resolution approach, see:
- [Original Issue #621](https://github.com/SwitchbackTech/compass/issues/621)
- [Fix Implementation #666](https://github.com/SwitchbackTech/compass/pull/666)
