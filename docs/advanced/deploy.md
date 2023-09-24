# How to Deploy

## Domain & Instances

In order to allow users to sign-in and sync their Google Calendars, you'll need access to a server that has a domain name and is accessible over HTTPS.

Then you'll need to update a few configuration values:

1. Update `BASEURL` in `packages/backend/src/.env` with your URI
1. Add the URL to the `CORS` list in `.env`
1. Add your domain to the list of allowed redirect URIs in your Google Cloud project

## Web

The web app is compiled into static assets. It's up to you to decide how to serve them to your users.

I use a Nginx revere proxy to serve the static assets and handle SSL. This requires more manual server configuration compared to a PaaS like Vercel or Heroku.

## Backend (API)

The backend consists of Node files that run on a server. Similar to the web app, it's up to you to decide how to run the Node server. You could turn it into a container and deploy it on a PaaS. Or you could run it in a VM on a cloud provider, which is what I do.

## Desktop

I originally built Compass as an Electron app. However, I quickly shifted to distributing it as a web app, because I found that easier to deploy and test.

The code in `packages/electron` comes from those early desktop days. I haven't touched it in a while, so it's probably broken. I've left it in so you can reference how to structure the code in this monorepo if you'd like to pick up where I left off.
