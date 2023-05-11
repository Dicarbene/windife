<h2 align="center">
<a href="https://github.com/dicarbene/windife">Windife</a> made with Nuxt 3
</h2><br>

<pre align="center">
🧪 Working in Progress
</pre>

## Features

- extendable editor: A rich-text editor can be used with multiple tools you customize. Default support: headers, list, code, raw html, 

- Data visualization powered by Echarts.js

- ChatGPT tool and speech recognition

- Web, Desktop, Mobile. Use it anywhere you want to.


- Client-side & Server-side rendering. [💚 Nuxt 3](https://nuxt.com/) You can host by your own or build it with electron. 

- [Pocketbase](https://sqlite.com/) - Using pocketbase to utilize the data flexibility of sqlite & migrate your dat a to everywhere!

- server all module. 你可以将从数据库服务，到后端，到前端，全分离部署

- 🏎 Zero-config cloud functions and deploy.

- 🦾 TypeScript, of course.

## Plugins



## Try it now!

### Online

<a href=""><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>

### Local

```bash
git clone https://github.com/dicarbene/windife
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: `npm install -g pnpm`

vi .env # provide your database path
DATABASE_URL="file:../windife.db" 

npx prisma db push # push your db schema to your .db file if .db file don't exist. 

pnpm dev # For development
pnpm build && pnpm start # For web production
# Remember to have a sqlite file for production as well
# run this command if you are using previous relative path for .env
# `cp windife.db .output/server/node_modules/.prisma`
```
