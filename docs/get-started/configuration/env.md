# Example `.env` file

This file contains your custom and sensitive information. It's not tracked by Git (see `.gitignore`), so you can safely copy this file, add your credentials, and keep it local.

## Development Example

This version of the `.env` should contain your development-variables.

`packages/backend/.env`:

```bash
# Don't ever commit this file or share the contents.

####################################################
# 1. Backend                                       #
####################################################
# Location of Node server
#   Feel free to use http in development. However, GCal API requires
#   https in order to sync calendars. So if you use http,
#   you won't receive notifications upon Gcal event changes
BASEURL=http://localhost:3000/api
CORS=http://localhost:3000,http://localhost:9080,https://app.yourdomain.com,app://rse
LOG_LEVEL=debug         # options: error, warn, info, http, verbose, debug, silly
NODE_ENV=development    # options: development, production
PORT=3000               # Node.js server
# Unique tokens for auth
#   These defaults are fine for development, but
#   you should change them before making your app externally available
TOKEN_COMPASS_SYNC=YOUR_UNIQUE_STRING
TOKEN_GCAL_NOTIFICATION=ANOTHER_UNIQUE_STRING


####################################################
# 2. Database                                      #
####################################################
MONGO_URI=mongodb+srv://admin:YOUR_ADMIN_PW@cluster0.m99yy.mongodb.net/dev_calendar?authSource=admin&retryWrites=true&w=majority&tls=true

####################################################
# 3. Google OAuth and API                          #
####################################################

# Get these from your Google Cloud Platform Project
CLIENT_ID=UNIQUE_ID_FROM_YOUR_GOOGLE_CLOUD_PROJECT
# CLIENT_ID will look something like: 93031928383029-imm173832181hk392938191020saasdfasd9d.apps.googleusercontent.com
CLIENT_SECRET=UNIQUE_SECRET_FROM_YOUR_GOOGLE_CLOUD_PROJECT
# CLIENT_SECRET will look something like: OiCPx-91AtmasndfUnrzTasdfas
# The watch length in minutes for a Google Calendar channel
# Set to a low value (like 10) for development and higher value for production.
# Make sure to refresh the production channel before it expires
CHANNEL_EXPIRATION_MIN=10

####################################################
# 4. User Sessions                                 #
####################################################
SUPERTOKENS_URI=UNIQUE_URI_FROM_YOUR_SUPERTOKENS_ACCOUNT
# SUPERTOKENS_URI will look something like: https://9d9asdhfah2892gsjs9881hvnzmmzh-us-west-1.aws.supertokens.io:3572
SUPERTOKENS_KEY=UNIQUE_KEY_FROM_YOUR_SUPERTOKENS_ACCOUNT
# SUPERTOKENS_KEY will look something like: h03h3mGMB9asC1jUPje9chajsdEd

####################################################
# 5. CLI (optional)                                #
####################################################
# Set these values to save time while using the CLI

STAGING_DOMAIN=staging.yourdomain.com
PROD_DOMAIN=app.yourdomain.com

####################################################
# 6. Email (optional)                              #
####################################################

# Get these from your ConvertKit account
# Does not capture email during signup if any empty EMAILER_ value
EMAILER_API_KEY=UNIQUE_KEY_FROM_YOUR_CONVERTKIT_ACCOUNT
EMAILER_API_SECRET=UNIQUE_SECRET_FROM_YOUR_CONVERTKIT_ACCOUNT
EMAILER_LIST_ID=YOUR_LIST_ID # get this from the URL
```

## Production Example

It's helpful to keep your dev and prod configuration separate. Save your production variables in `packages/backend/.prod.env`

When using the CLI to build, it will copy it to the artifact directory and rename it to `.env`. See [the CLI page](../../guides/cli) for more details about the CLI.

`packages/backend/.prod.env`:

```bash
# same keys as above, but with production values

```
