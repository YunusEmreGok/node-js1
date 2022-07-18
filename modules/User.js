const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserData = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
});

module.exports = mongoose.model('User', UserData);