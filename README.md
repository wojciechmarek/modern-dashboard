# Modern Dashboard

It is a demo application that shows how to build a modern web application with Angular 16 and NestJS. This project is not an actual application solving some particular business problem. Instead, it is a blueprint that can be used to build a real application. For now, it shows how to style the application using the atomic design methodology and how to secure it using the JWT tokens.

## Purpose

To learn the Angular 16 and NestJS frameworks and build a modern application with cutting-edge technologies and techniques:

- ✅ using the latest Angular 15 features (standalone components, Signal, etc.),
- ✅ using the latest NestJS features (GraphQL, etc.),
- ✅ using the docker containers to develop and run the application,
- ❌ using the MongoDB database with Change Streams,
- ✅ using the atomic design methodology to build the UI,
- ❌ using real-time communication with GraphQL subscriptions,
- ✅ using Nx to manage the mono repo (to share code between the front end and the backend).

## Demo

Not available [yet](https://giphy.com/gifs/pokemon-anime-7SF5scGB2AFrgsXP63).

## Used technologies

- 🎁 **Repository:** Monorepo with NX
- 🧰 **Frameworks:** Angular 15, NestJS
- 🛠️ **Tools:** yarn, eslint, prettier, husky, conventional commits, storybook, docker, mongodb, graphql, apollo
- 🎨 **Styling:** scss, css variables, BEM notation
- 🧪 **Testing:** cypress, jest
- ☁️ **Database:** MongoDB with Change Streams, typeORM
- 💎 **Others:** desktop first approach, progressive web app, atomic design

## Storybook

To see the components in action, run the Storybook.

To start the Storybook:

1. Type and run: `yarn storybook`.
2. Open `http://localhost:4004` in your browser to see the storybook.

## How to run

There are two ways to start a project:

- using a classic Node.js environment installed on the local machine,
- using a development container (the `devcontainer.json` file in the repo).

The classic way:

1. Install [node.js](https://nodejs.org/en/download/).
2. Install [yarn](https://classic.yarnpkg.com/en/docs/install).
3. Clone the repository.
4. Type and run: `yarn` in the root directory.
5. Type and run: `yarn dev` in the root directory.
6. Open `http://localhost:4200` in your browser to see the frontend app.
7. Open `http://localhost:3333` in your browser to see the backend app.

The development container way:

1. Install [VS Code](https://code.visualstudio.com/).
2. Install and run [Docker](https://www.docker.com/products/docker-desktop).
3. Install a VS Code [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
4. Clone the repository.
5. Open the repository in VS Code.
6. Click on the `><` (Open a Remove Window) button in the bottom left corner of the VS Code window.
7. Select `Reopen in Container`.
8. Wait for the container to start.
9. Open a terminal in VS Code (it will be automatically connected to the container's shell).
10. Type and run: `yarn` in the root directory.
11. Type and run: `yarn dev` in the root directory.
12. Open `http://localhost:4200` in your browser to see the frontend app.
13. Open `http://localhost:3333` in your browser to see the backend app.
