const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    count_page: {
        type: Number
    },
});

module.exports = mongoose.model('Book', BookSchema);