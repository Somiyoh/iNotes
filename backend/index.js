const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5005

connectToMongo()
app.use(cors()) // can't directly use API, have to use cors 
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotes backend listening on http://localhost:${port}`)
})
