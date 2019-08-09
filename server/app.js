const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jbapp:zU1wRwLdiasvuxez@jbusiness-4hoxm.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true', {
  useCreateIndex: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;

// Check db connection
db.once('open', function () {
  console.log('Connected to JBusiness mongo db on cloud');
})
db.on('error', function (err) {
  console.log(err);
})

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
    User.find({}, function (err, users) {
      if (err) { console.log(err); }
      else {
        res.render('users', {
          users: users
        });
      }
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