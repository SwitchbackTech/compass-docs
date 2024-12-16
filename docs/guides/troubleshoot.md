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

When encountering invalid domain name, this is because the url you provided in the `SUPERTOKENS_..` value in your .env file is incorrect. This could be caused by you prematurely finished setting up your supertokens. Please make sure to completely set up your supertokens, then copy your assigned api key and url.
