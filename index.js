const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT||5000
const courses = require('./data/fake_data.json')
app.use(cors())
// =========================================================
//----------- Route section 
// =========================================================
app.get('/', (req, res) => {
  res.send('wellcome to assingment 10  server backend' )
})

// =========================================================

// =========================================================
app.listen(port, () => {
  console.log(`app is running on port ${port}`)
})