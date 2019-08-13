const express = require('express');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://jbapp:jbapp@jbusiness-4hoxm.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true";
const client = new MongoClient(url, { useNewUrlParser: true });

// Load models
let User = require('./models/user');

// Init app
const app = express();

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.get('/', function (req, res) {
  res.render('index', { title: 'My dude from app.js' });
});
app.get('/users', function (req, res) {
  try {
    client.connect(err => {
      let users = client.db("jbusiness").collection("users");
      // perform actions on the collection object
      res.send(users.find({}).toArray());
      client.close();
    });
  }
  catch (err) {
    console.log(err);
  }
})

// Start server
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
})