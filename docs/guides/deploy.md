# Deploy

## Domain & Instances

In order to allow users to sign-in and sync their Google Calendars, you'll need access to a server that has a domain name and is accessible over HTTPS.

Then you'll need to update a few configuration values:

1. Update `BASEURL` in `packages/backend/.prod.env` with your URI
2. Add the URL to the `CORS` list in `.prod.env`
3. Add your domain to the list of allowed redirect URIs in your Google Cloud project

## Web

The [build CLI for web](./build) uses webpack to compile the frontend code into JS and static assets. It's up to you to decide how to serve these files to your users.

I use a Nginx revere proxy to serve the static assets and handle SSL. This requires more manual server configuration compared to a PaaS like Vercel or Heroku.

## Backend (API)

After running [the build CLI for the backend](./build), you'll have a bunch of Node files. You can copy these to your server and run them directly like a normal Node app -- by running `node node/packages/backend/src/app.js`. Similar to the web app, it's up to you to decide how to configure your Node server. You could turn it into a container and deploy it on a PaaS. Or you could run it in a VM on a cloud provider and use a tool like `pm2` to manage it. Depending on the PaaS you choose, you might need to configure the webserver to support websocket connections over a reverse proxy.

Getting the backend production-ready can be a headache. LMK if you'd like someone (me, Tyler) to set it up for you.

## Desktop

I originally built Compass as an Electron app. However, I quickly shifted to distributing it as a web app, because I found that easier to deploy and test.

The code in [`packages/electron` from this commit](https://github.com/SwitchbackTech/compass/commit/506c87d3dc05fed83d9a5b714fc4a637152c3bbe) comes from those early desktop days. It's probably broken, but it might be helpful to reference if you're keen to pick up where I left off. The structure is based on [this template](https://github.com/reZach/secure-electron-template).
