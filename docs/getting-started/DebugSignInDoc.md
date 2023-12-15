## Unable to Sign In with Google in Local Compass Instance

### Msiing User id
When you encounter a missing user id , it is because compass is not connected to your mongo database and there are no records of any user stored. The reason is because you are not connected to the mongo database. Sometimes the mongo db is successfully connected when you run yarn dev:backend but still a missing user id! Why that? I found out that I was missing Mongo db in my machine so I had to install and run mongod --version to see if you have mongo db in your machine.

If you use Ubuntu OS you can follow the following steps. However,if you use windows or other OS while running compass, follow this [installation](https://www.mongodb.com/docs/manual/installation/) for mongodb
1. Update the APT packages index

```sh

sudo apt update
```
2. Import the public key used by the package management system

```sh
sudo apt-get install gnupg curl

```
3. Create a list file for MongoDB
```sh
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```
4. Reload local package database

```sh
sudo apt-get update
```

5. Install the MongoDB packages
```sh
sudo apt-get install -y mongodb-org

```

6. Confirm you have mongo db in your machine

```sh
mongod --version
```

### Mismatch User id

When you encounter a mismatch user id , probably is because the user id that was set in your mongo db is not the one being captured maybe because you have store many users in your database. In order to fix this you need to clear your user data using this [documentation](https://docs.compasscalendar.com/docs/advanced/CLI#cleaning-user-data)

### Invalid domain name
When encoutering invalid domain name , this is because the url you provided in the supertoken_url in your .env file is incorrect. This maybe because you prematurely finished setting up your supertokens. Please make sure to completely set up your supertokens , then copy your assigned api key and url.


