---
sidebar_position: 0
---

# How to Install & Develop

Compass is a monorepo that contains everything needed to get a calendar app up and running, including frontend, backend, database, and dev scripts.

The trade-off for having the code in one repo is that it takes a little longer to get everything to work together. SorryBoutThat 🤷‍♂️

By the end of this guide, you'll have a local development environment that has:

- a running NodeJS API server, which'll hot-reload upon changes
- a running React web app, which'll also hot-reload upon changes
- a MongoDB instance with your calendar data
- a CLI, which you can use to build
- `package.json` scripts to run local tests

You'll then be ready to play with the local web app and test any changes you'd like to make.

Ready? Let's go!

## Get the Code

1. Clone the repo:

   ```bash
   git clone https://github.com/SwitchbackTech/compass.git

   cd compass
   ```

## Create `.env` file

This is the file that contains your custom and sensitive information. We're creating it now so we can update the values as we set up our third-party accounts.

1. Create new file in `compass/packages/backend` called `.env`
2. Copy & paste the contents from [the example `.env`](Configuration/env)

## Setup Accounts

Compass relies on a few external services. Let's start by creating accounts for those and adding the credentials to that environment file.

### Google OAuth

Compass uses the Google Calendar API to import and sync events from GCal.

Google APIs require authentication through OAuth.

To use Google OAuth, create a Google Cloud Platform project and setup an OAuth screen.

1. Create a [Google Cloud account](https://cloud.google.com/)
2. Create a project
3. [Configure your OAuth consent screen](https://support.google.com/cloud/answer/10311615#user-type) for internal testing
   - Set the User type to `External` and status to `Testing`
   - Add your test Google accounts to the list of authorized users
   - You don't have to manually add scopes--The Compass code does that for you (`Login.tsx`)
4. Get Google API Client ID & Secret
   - Go to [Credentials](https://console.cloud.google.com/apis/credentials) in your Google Cloud project
   - Create an OAuth Client ID
   - Select Web Application
   - Add to Authorized JavaScript origins: `http://localhost:9080`
   - Add to Authorized redirect URIs: `http://localhost:3000`
   - Copy the Client ID and Secret to your `.env` file

### MongoDB
Before using Mongo db, ensure you [install](https://www.mongodb.com/docs/manual/installation/) it in your local machine.

User data is stored across a few MongoDB collections. These collections are created automatically at runtime, so you just have to create an account to get started.

Compass connects to MongoDB through the NodeJS driver.

1. Create a free [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register)
2. Get your Node.js driver [connection string](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb)

3. When you get your connection string,scroll down to the Network access in the left sidebar and add your current ip address. Make sure you always include your ip address when you switch networks because your device ip v4 address changes from one ISP to another and from time to time.

      - Update the connection string in your `.env` file

   

### Supertokens

Compass uses Supertokens to manage user sessions. This is what allows users to stay signed in between page refreshes. It also prompts reauthorization after an extended time away.

Supertokens offers many different authentication options (AKA: recipes). Compass only uses their managed session service, which means you don't have to worry about a lot of their onboarding. What we do need is to get the credentials to Supertokens Core, their managed-service.

Supertokens will provision the auth infrastructure in AWS for you, presenting a connection URI and API key afterwards. That's all we need to get started.

1. Create a free [Supertokens account](https://supertokens.com/)
2. Click trough the onboarding steps
   - If prompted for a recipe, select Passwordless
3. Select the Managed Core option
4. After your instance is configured, copy the connection URI and API key to your `.env` file

### ConvertKit (optional)

ConvertKit is an email marketing service. After a new user signs in, Compass adds their email to a ConvertKit subscriber list. You can combine this trigger with an automation in ConvertKit to send a welcome email to new users.

You can skip this if you don't want to add emails to ConvertKit.

1. Create a free [ConvertKit account](https://convertkit.com/)
2. Get your API key and Secret from the Account Settings
3. Get your ConvertKit subscriber list ID
   - Create a segment
   - Go to Subscribers
   - Click on the list you want to use
   - Copy the ID from the URL
4. Add the API key, Secret, and list ID to your `.env` file
5. Update the to and from email addresses in your `.env` file

## Start in Dev Mode

Pfew! That was a lot of setup. Now for the fun part. Run these commands from the root `compass` directory

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the backend in dev mode

   ```bash
    yarn dev:backend
   ```

3. Open a separate terminal & start the web app in dev mode

   ```bash
   yarn dev:web
   ```

4. Open the app in your browser: [http://localhost:9080](http://localhost:9080)

5. Sign in with one of your authorized test Google accounts

   If all goes well, Compass will:

   - Create a new user in MongoDB
   - Start a user session with Supertokens
   - Add the user's email to ConvertKit (if enabled)
   - Import events from the user's `primary` Google Calendar into MongoDB
   - Setup a sync channel to receive Google Calendar webhook notifications for the duration specified in the `.env` (if enabled)

   Possible bug you'll encounter during signing in, visit this [documentantion](https://github.com/AzharAhmed-bot/compass-docs/blob/Installation-doc-Update/docs/getting-started/DebugSignInDoc.md)

6. Try making a change to the frontend and backend code to confirm each service hot reloads

Did I miss something? Please open an issue or PR to help me improve this guide.
