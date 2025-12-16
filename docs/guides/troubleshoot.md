# Troubleshoot

## Unable to Sign In with Google in Local Compass Instance

### Missing User id

When you encounter a missing user id, it is because Compass is not connected to your MongoDB database and there are no records of any user stored. The reason is because you are not connected to the MongoDB database.

Sometimes MongoDB is successfully connected when you run `yarn dev:backend` but you still get a missing user id error. This could be because:

1. The MongoDB connection string in your `.env.local` file is incorrect
2. Your IP address is not whitelisted in MongoDB Atlas (if using Atlas)
3. The MongoDB service is not running (if using a local MongoDB instance)

If you're using a local MongoDB instance, verify it's installed and running:

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

When you encounter a mismatch user id, the user in your mongo collection is not the one being captured. This could be because you have duplicate users in your database. In order to fix this you need to clear your user data using the CLI delete command:

```bash
yarn cli delete -u <email>
```

See the [CLI guide](./cli.md#cleaning-user-data) for more details on deleting user data.

### Invalid domain name

When encountering an invalid domain name error, this is because the URL you provided in the `SUPERTOKENS_..` value in your `.env` file is incorrect. This could be caused by prematurely finishing the setup of your Supertokens instance.

To fix this:

1. Make sure to completely set up your Supertokens instance
2. Copy the exact connection URI and API key from your Supertokens dashboard
3. Verify the connection URI format matches what Supertokens provides (should include the protocol, domain, and port if applicable)
4. Ensure there are no extra spaces or characters in the environment variable values
