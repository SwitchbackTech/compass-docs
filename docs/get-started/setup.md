---
sidebar_position: 0
---

# Setup

Compass is a monorepo that contains everything needed to get a calendar app up and running, including frontend, backend, database, and dev scripts.

By the end of this guide, you'll have a local development environment that has:

1. a running NodeJS API server, which'll hot-reload upon changes
1. a running React web app, which'll also hot-reload upon changes
1. a MongoDB instance with your calendar data
1. a CLI, which you can use to create a distributable artifact
1. `package.json` scripts to run local tests

You'll then be ready to play with the local web app and test any changes you'd like to make.

Ready? Let's go!

## Get the Code

1. Clone the repo:

   ```bash
   git clone https://github.com/SwitchbackTech/compass.git

   cd compass
   ```

## Setup the `.env` file

This is the file that contains your custom and sensitive information. We're creating the file now so we can update the values as we set up our third-party accounts.

1. Copy `compass/packages/backend/.env.example` and save as `compass/packages/backend/.env`.
2. Read through the comments to familiarize yourself with the environment variables.

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
   - You don't have to manually add scopes -- the Compass code does that for you (`Login.tsx`)
4. Get Google API Client ID & Secret
   - Go to [Credentials](https://console.cloud.google.com/apis/credentials) in your Google Cloud project
   - Create an OAuth Client ID
   - Select Web Application
   - Add to Authorized JavaScript origins: `http://localhost:9080`
   - Add to Authorized redirect URIs: `http://localhost:3000`
   - Copy the Client ID and Secret to your `.env` file
5. Ensure that you explicitly enabled Google Calendar API
   - Search for Google Calendar using the search bar in the top section of the page
   - Click on "Google Calendar API"
   - Enable the API if it is not enabled

### MongoDB

#### Overview

Before using Mongo db, ensure you create a free [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) that allows you to create a Mongo db database, which is the easiest and quickest way to get started with Mongo without needing to install it locally.

User data is stored across a few MongoDB collections. These collections are created automatically at runtime, so you just have to create an account to get started.

#### Instructions

Compass connects to MongoDB through the NodeJS driver.

1. Create a free [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register)
2. Get your Node.js driver [connection string](https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/connect/#std-label-node-connect-to-mongodb)
3. When you get your connection string,scroll down to the Network access in the left sidebar and add your current ip address. Make sure you always include your ip address when you switch networks because your device ip v4 address changes from one ISP to another and from time to time.
4. Add connection string to your `.env` file

### Supertokens

#### Overview

Compass uses Supertokens to manage user sessions. This is what allows users to stay signed in between page refreshes. It also prompts reauthorization after an extended time away.

Supertokens offers many different authentication options. Compass only uses their managed session service, which means you don't have to worry about a lot of their onboarding. What we do need is to get the credentials to Supertokens Core, their managed-service.

Supertokens will provision the auth infrastructure in AWS for you, presenting a connection URI and API key afterwards. That's all we need to get started.

#### Instructions

1. Create a free [Supertokens account](https://supertokens.com/)
2. Click trough the onboarding steps
   - If prompted for a recipe, select Passwordless
3. Select the Managed Core option
4. After your instance is configured, copy the connection URI and API key to your `.env` file

### Kit (optional)

Kit is an email marketing service. After a new user signs in, Compass creates a Kit subscriber and adds a tag. You can use this tag to trigger an automation sequence in Kit to send a welcome email to new users.

You can skip this if you don't want to add emails to Kit.

1. Create a free [Kit account](https://kit.com/)
2. Get your API secret from the Account Settings
3. Get your Kit tag ID. You can find this in the URL of the tag page
4. Add the API secret and tag ID to your `.env` file

### Ngrok (optional)

Ngrok exposes local networked services behinds NATs and firewalls to the public internet over a secure tunnel. It allows us to create an agent endpoint that forwards public traffic to localhost Compass API during development so that we can test our webhook endpoints(Gcal etc.) without needing access to a deployed instance..

You can skip this if you're not working on, or going to test the webhook functionalities.

1. Create a free [Ngrok account](https://dashboard.ngrok.com/signup/)
2. Get your [Authtoken](https://dashboard.ngrok.com/get-started/your-authtoken) from the Ngrok Dashboard
3. Create a [Static Domain](https://dashboard.ngrok.com/domains) from the Ngrok Dashboard
4. Add the Authtoken(`NGROK_AUTHTOKEN`) and Static Domain(`NGROK_DOMAIN`) to your `.env` file

### PostHog (optional)

#### Overview

PostHog provides analytics and error handling for Compass. This helps track user interactions and monitor application errors to improve the user experience and identify issues.

Like Compass, PostHog is open-source and can be self-hosted. This makes it a good fit for users who are self-hosting Compass for their team and prefer to keep their analytics data in-house rather than sending it to a third-party provider.

You can skip this if you don't want to collect analytics or error tracking data.

#### Instructions

1. Create a free [PostHog account](https://posthog.com/)
2. Create a new project in your PostHog dashboard
3. Get your Project API Key from the Project Settings
4. Get your PostHog Host URL (usually `https://app.posthog.com` for PostHog Cloud, or your self-hosted URL)
5. Add the API Key (`POSTHOG_KEY`) and Host URL (`POSTHOG_HOST`) to your `.env` file

Alternatively, if you prefer to self-host PostHog:

1. Follow the [PostHog self-hosting guide](https://posthog.com/docs/self-host) to deploy your own instance
2. Use your self-hosted PostHog URL as the `POSTHOG_HOST` value
3. Get the Project API Key from your self-hosted PostHog dashboard

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
   - Add the user's email to Kit (if enabled)
   - Import events from the user's `primary` Google Calendar into MongoDB
   - Setup a sync channel to receive Google Calendar webhook notifications for the duration specified in the `.env` (if using HTTPS)

6. Make a change to the frontend and backend code to confirm each hot reloads

## Install Recommended Tools

You already have everything you need, but these tools will make your life easier.

- [React Developer Tools](https://react.dev/learn/react-developer-tools): Helps debug React components
- [Redux DevTools Browser Extension](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en): Helps debug Redux and Redux Saga

Did we miss something? Please open an issue or PR to help us improve this guide.
