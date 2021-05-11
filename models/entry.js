const mongoose = require('mongoose');

const entrySchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    journal: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    eprint: {
        type: Number
    },
    eprinttype: {
        type: String
    },
    eprintclass: {
        type: String
    },
    pages: {
        type: String
    },
    month: {
        type: String
    },
    annote: {
        type: String
    }
})
module.exports = entry = mongoose.model("Entry", entrySchema);