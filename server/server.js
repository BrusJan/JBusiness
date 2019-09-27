require('rootpath')();
const express = require('express');
const config = require('./config');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('utils/jwt');
const errorHandler = require('utils/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/user.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = config.PORT;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});