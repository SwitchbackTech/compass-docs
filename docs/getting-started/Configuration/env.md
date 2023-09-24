# Example `.env` file

`packages/backend/src/.env`:

```bash
# Don't ever commit this file or share the contents.

####################################################
# Backend                                          #
####################################################

CORS=http://localhost:3000,http://localhost:9080,https://app.yourdomain.com
LOG_LEVEL=debug         # options: error, warn, info, http, verbose, debug, silly
NODE_ENV=development    # options: development, production
PORT=3000               # Node.js server


####################################################
# Database                                         #
####################################################
# Optional: Defaults to local MongoDB if empty
MONGO_URI=mongodb+srv://admin:as9BmasHiH@cluster0.m99yy.mongodb.net/dev_calendar?authSource=admin&retryWrites=true&w=majority&tls=true # optional


####################################################
# Email                                            #
####################################################

# Get these from your ConvertKit account
# Does not capture email during signup if any empty EMAILER_ value
EMAILER_API_KEY=gLIhams83HaxmMGaAH                      # optional
EMAILER_API_SECRET=DDBDMDBaha-mah83n5Plsjzgask44vMM     # optional
EMAILER_LIST_ID=1829388                                 # optional

EMAIL_FROM=no-rely@yourdomain.com
EMAIL_TO=you@yourdomain.com


####################################################
# Google OAuth and API                             #
####################################################

# Get these from your Google Cloud Platform Project
CLIENT_ID=93031928383029-imm173832181hk392938191020saasdfasd9d.apps.googleusercontent.com
CLIENT_SECRET=OiCPx-91AtmasndfUnrzTasdfas

# The watch length in minutes for a Google Calendar channel
# Set to a low value (like 10) for development and higher value for production.
# Make sure to refresh the production channel before it expires
CHANNEL_EXPIRATION_MIN=10

# Where to receive GCal webhook notifications
# Skips Gcal syncing if empty
BASEURL=https://staging.yourdomain.com                  # optional


####################################################
# User Sessions                                    #
####################################################
SUPERTOKENS_URI=https://9d9asdhfah2892gsjs9881hvnzmmzh-us-west-1.aws.supertokens.io:3572
SUPERTOKENS_KEY=h03h3mGMB9asC1jUPje9chajsdEd
```
