<h1>CS5610Assignment2</h1>

<h2>Client Management System</h2>
[Client Management System](https://github.com/JuneWprog/cs5610/tree/assignment2)<br>
A web app using node.js and Express that does Create and Read operations using MongoDB.
<hr>
## URLs
<h3>Home page: </h3>
uri: localhost:3000

<h3>Clients page: </h3>
Show lists of all the existing clients in the database<br>
uri: localhost:3000/clients
<h3>Create Client page: </h3>
Add a new client to the database using a form<br>
uri: localhost:3000/clients/newclient
<h3>Client Detail page: </h3>
Show details of each individual client when the client selects<br>
uri: localhost:3000/clients/:clientId

## Quick Start

To get this project up and running locally on your computer:

1. Set up a [Nodejs](https://wiki.developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) development environment.
1. Once you have node setup, enter the following commands in the root of your clone of this repo:
   ```
   npm install
   DEBUG=express-locallibrary-tutorial:* npm run devstart   #For linux
   ```
1. Open a browser to http://localhost:3000/ to open the library site.

> **Note:** The library uses a default MongoDb database hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). <br>

You should use a different database for your own code experiments.

**Email:**wang.jun6@northeastern.edu
