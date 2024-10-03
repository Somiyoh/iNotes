const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to Mongo Succesfully'))
    .catch((e) => console.log(e.message))
}

module.exports = connectToMongo
