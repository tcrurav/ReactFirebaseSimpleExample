# Simplest CRUD example with React and Firebase

This project is just a project example to learn how to use Firebase with React.

## Getting Started

Read the links in the acknowlegements section bellow to get an idea about Firebase.

The final result looks like this, i.e. a simple CRUD without update.

![Screenshot](/screenshots/screenshot-1.png)

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

Create a Firebase project and create a Real-time database in that project.

Import some fake data in your database to start up. Here you have some:
[Some data to import to Firebase](/docs/reactbikes-default-rtdb-export.json)

Clone this project:

```
git clone https://github.com/tcrurav/ReactFirebaseSimpleExample.git
```

Now install all dependencies.

```
cd ReactFirebaseSimpleExample
npm install
```

Modify the constant firebaseConfig in file src/firebase.js so that it contains the corresponding configuration data of your project. Here you have an example:

```
const firebaseConfig = {
  apiKey: "AIzaSyBL83k7hQlfWWYFsjV4qIqAwFyTNV3Csds",
  authDomain: "reactbikes.firebaseapp.com",
  databaseURL: "https://reactbikes-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactbikes",
  storageBucket: "reactbikes.appspot.com",
  messagingSenderId: "120470000752",
  appId: "1:120470000752:web:e3ce490552fcc96fe750b5"
};
```

And finally run the project.

```
cd ReactFirebaseSimpleExample
npm start
```

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [firebase real-time database](https://firebase.google.com/docs/database/web/read-and-write?hl=es-419) - Read and Write data in the web.
* [Create React App](https://create-react-app.dev/) - Set up a modern web app by running one command

## Acknowledgments

* https://www.educative.io/courses/complete-guide-firebase-web/N8pxYnzEGgp. Add Firebase to our project.
* https://www.educative.io/courses/complete-guide-firebase-web/gkJGzkWK7zk. Read, Write, and Delete Data from the Realtime Database
* https://www.npmjs.com/package/react-icons. Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
* https://palettes.shecodes.io/. CSS color palettes.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.

