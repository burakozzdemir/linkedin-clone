# LinkedIn Clone
# [LIVE](https://linkedin-clone-iota-umber.vercel.app/)


https://user-images.githubusercontent.com/95588996/179829567-82c19fb9-6b9f-4491-a816-64d8f76e916e.mp4


# Tech

- [React] - React is a JavaScript-based UI development framework.
- [React-Redux] - Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
- [React-ReduxJs/Toolkit] - Redux Toolkit is an official, opinionated, batteries-included toolset for efficient Redux development.
- [React-Router-v6] - React Router is a standard library for routing in React.
- [Node.js] - Evented I/O for the backend.
- [Firebase] - App development platform that helps you build and grow apps and games users love.
- [SASS] - Sass is an extension of CSS that enables you to use things like variables, nested rules, inline imports, and more.
- [Material-UI] - Material-UI is an open-source project that features React components that implement Google's Material Design.
- [Visual-Studio-Code] - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

## Features and Functionality

- Post functionality
- Login using Google (Firebase Authentication)
- Single Page Application
- Create a new post with animated
- Realtime update posts
- Auto authenticate user on refresh
- 4 different pages with React Router v6
- Login
- Log Out
- Clone this repo

### How to build?

#### 1.Clone this repo

#### 2.Install all the dependencies

```sh
  npm i
```

#### 3.Setup Firebase

- Create Firebase account
- Create a new project
- Create a web app for that
- Setup authentication using Google

#### 4.Let's build the optimized version

```sh
  npm run build
```

#### 5.Integrating Vercel

- Install Vercel CLI
- Login to Vercel

```sh
  vercel login
```

- Initialize Vercel

```sh
  vercel github
```

- Deploy clone and make it live

```sh
  vercel deploy
```

#### 6.Setup ReduxJsToolkit

- Login
- Logout

#### 7.Setup React Router v6

- Create different 4 pages

```sh
  layout
  home
  register
  login
```
## App Flow

Project Structure
```
project
|-- public
|-- src
|    |-- assests
|    |      |-- images
|    |      |-- scss
|    |-- components
|    |      |-- Feed
|    |      |-- Header
|    |      |-- HeaderOption
|    |      |-- InputOption
|    |      |-- Logout
|    |      |-- Post
|    |      |-- Sidebar
|    |      |-- SignInGoogle
|    |      |-- Widgets
|    |-- pages
|    |      |-- Home
|    |      |-- Layout
|    |      |-- Login
|    |      |-- Register
|    |-- router
|    |      |-- View
|    |-- store
|    |      |-- store
|    |      |-- UserSlice
|    |-- utils
|    |      |-- firebase
|    |-- App.css
|    |-- App.js
|    |-- index.css
|    `-- index.js
|-- package.json
`-- README.md
```

### Future Plans

- Post deleting functionality
- Add comments on post
- Add dropdown menu

NOTE: PLEASE LET ME KNOW IF YOU DISCOVERED ANY BUG OR YOU HAVE ANY SUGGESTIONS
