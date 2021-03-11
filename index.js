const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080;


const home = require('./homeTemplate')
app.get('/', (req, res) => {
  res.end(home)
})


const ios = require("./apple-app-site-association.json")
app.get('/apple-app-site-association', (req, res) => {
  res.json(ios)
})

const android = require("./.well-known/assetlinks.json")
app.get('/.well-known/assetlinks', (req, res) => {
  res.json(android)
})

app.listen(PORT, () => {
  console.log('APP STARTED  !!! --- http://localhost:8080')
})
