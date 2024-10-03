const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    tag : {
        type: String,
        default: "General"
    },
    date : {
        type: Date,
        required: Date.now
    }
  });


  module.exports = mongoose.model('user', notesSchema)