# Hacker News Redesign Front End Assignment

## Description

Redesigned Hacker News Single Page App for Revelio Labs Front End Assignment.

## Local Installation & Setup

1. clone `master` branch locally
2. `npm install` to download node modules
3. `npm start` to start dev server

## GitHub Pages Deployment

A deployed version of the app can be found here: [https://myronhuang.github.io/hacker-news-redesign/](https://myronhuang.github.io/hacker-news-redesign/)

The deployed version is built from the code found in the `deploy` branch. The main difference between `deploy` and `master` is that `deploy` uses `HashRouter` while `master` uses `BrowserRouter` for routing. `HashRouter` is used for the deployed version as a solution to allow for client-side routing in GitHub Pages.

The side effect of this is that routing for the deployed version will include a "#" in the URL while running the source code from `master` locally will not.

For instance:

Deployed version\
`https://myronhuang.github.io/hacker-news-redesign/#/starred`

`master` code running locally\
`localhost:3000/starred`

## Core Features Implemented

1. Mockup implemented with React and Redux
2. Client Side Routing implemented with React Router
3. Used Official Hacker News API to fetch live data
4. Starring posts
5. Linking to starred and detail pages

## Bonus Features Implemented

1. Light and Dark mode
2. "show more" feature\
   -- Extras ---
3. Persistent state through local storage
4. Responsive Design (mobile layout)
5. Github Pages Deployment

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
