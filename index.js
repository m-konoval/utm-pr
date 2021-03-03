const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.end(`<h1>Hello World</h1>`)
})


app.get('/about', (req, res) => {
  res.end(`<h1>About World</h1>`)
})


const some = require("./some.json")
app.get('/some.json', (req, res) => {
  res.end(some)
})

app.listen(PORT, () => {

  console.log('APP STARTED  !!! ---')
})
