const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    author:String,
    description: String,
    datetime: {
        type: Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('books', BookSchema);