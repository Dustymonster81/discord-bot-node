# Discord Music Bot with Webinterface

Build the server first then the client.

```
> npm install
> npm run build --prod
client> npm install
client> npm run build --prod
> node ./bin/wwww
```

Create .env file or set environment variables in commandline and add NODE_ENV=production to disable .env file.

If you access the WebUI via localhost it will try to access the server on localhost:3000, for development.