<div align="center" style="padding: 4px;">
**🚨 NOTICE: This repo turned into an organization! So, latest implementations are available on [Atendim](https://github.com/atendim)**
</div>

# My Schedule 🗓️
My Schedule is a simple app for manage and schedule appointments between providers and customers. 

## Features 🚀
- Login system
- Provider registration
- Customer registration per provider
- Scheduling appointments per customer
- Feed by current time, showing user's overdue appointments and highlighting them
- Separate feed with the schedules of the day and sorted by hour, allowing visualization of overdue, completed and open appointments.

## Production 🔧


## Tech 💻

>Main Stack: &nbsp; <a href="https://axios-http.com/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="21px" height="21px"></a> &nbsp; <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>  **&nbsp;** <a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a> &nbsp; <a href="https://www.sqlite.org/index.html" title="# SQLite"><img src="https://www.prisma.io/prisma-in-your-ecosystem-page/sqllite.svg" alt="MySQL" width="21px" height="21px"></a>

### Frontend 

- <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a> &emsp; [Typescript] - JavaScript with syntax for types.
- <a href="https://axios-http.com/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="21px" height="21px"></a> &emsp; [React JS] - A JavaScript library for building user interfaces
- <a href="https://reactjs.org/" title="Axios"><img src="https://axios-http.com/assets/favicon.ico" alt="React" width="21px" height="21px"></a> &emsp;[Axios] - For API communication
- <a href="https://www.radix-ui.com/" title="Radix "><img src="https://www.radix-ui.com/favicon.svg" alt="React" width="21px" height="21px"></a>&emsp; [Radix UI] - Accessible UI components lib
- <a href="https://stitches.dev" title="Stiches"><img src="https://stitches.dev/favicon.svg" alt="React" width="21px" height="21px"></a>&emsp; [Stiches] - CSS-in-JS lib for styling components
- <a href="https://reactjs.org/" title="FormatJS"><img src="https://formatjs.io/img/favicon.ico" alt="React" width="21px" height="21px"></a>&emsp; [FormatJS] - Internationalization of languages on the web
- <a href="https://vitejs.dev/" title="Vite"><img src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg" alt="Vite" width="21px" height="21px"></a>&emsp; [Vite] - Bundler for web aplications
### Backend
- <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="21px" height="21px"></a>&emsp;  [Typescript] - JavaScript with syntax for types.
- <a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px"></a>&emsp;  [Node.js](https://nodejs.org/) - Javascript Runtime
- <a href="https://prisma.io/" title="Prisma"><img src="https://www.prisma.io/images/favicon-32x32.png" alt="Vite" width="21px" height="21px"></a>&emsp; [Prisma] -  Open source next-generation ORM
- <a href="http://expressjs.com" title="Express"><img src="http://expressjs.com/images/favicon.png" alt="Vite" width="21px" height="21px"></a> &emsp;[Express] - Node JS Open-source framework for manage servers and routes
- <a href="https://www.sqlite.org/index.html" title="# SQLite"><img src="https://www.prisma.io/prisma-in-your-ecosystem-page/sqllite.svg" alt="MySQL" width="21px" height="21px"></a>&emsp; [SQLite] - SQL database engine.

## Installation

Requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

### Steps to Setup

 1. Clone the application
	```sh
	git clone https://github.com/ItaloMedici/my-schedule-app.git
	```
 2.  Run a migration to create your database tables with Prisma Migrate
		```sh
		cd my-schedule-app/backend
		npx prisma migrate dev --name init
		```

### Start Server
```sh
cd my-schedule-app/backend
yarn dev
```
Will start listenning on [http://localhost:4000](http://localhost:8080/)

### Start Web
```sh
cd my-schedule-app/web
yarn dev
```
Will start running at [http://localhost:3000](http://localhost:8080/)


## Contribute
Let's make this app better togheter!

If you have any suggestions/ideas please feel free to write about it. You are also welcome to fork this project and send pull request with your changes.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
    
   [ReactJs]: <https://reactjs.org/>
   [axios]: <https://axios-http.com/docs/intro>
   [Radix UI]: <https://www.radix-ui.com/>
   [Stiches]: <https://stitches.dev/>
   [Prisma]: <https://www.prisma.io/>
   [node.js]: <http://nodejs.org>
   [Typescript]: <https://www.typescriptlang.org/>
   [express]: <http://expressjs.com>
   [React JS]: <https://reactjs.org/>
   [FormatJS]: <https://formatjs.io/>
   [Vite]: <https://vitejs.dev/>
   [SQLite]: <https://www.sqlite.org/index.html>
