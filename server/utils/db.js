const config = require('../config');
const mongoose = require('mongoose');
mongoose.connect(config.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};