const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080;


const home = require('./homeTemplate')
app.get('/', (req, res) => {
  res.end(home)
})


const some = require("./apple-app-site-association.json")
app.get('/apple-app-site-association', (req, res) => {
  res.json(some)
})

app.listen(PORT, () => {
  console.log('APP STARTED  !!! --- http://localhost:8080')
})
