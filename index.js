const express = require("express")
const app = express()

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.end(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="alternate" href="android-app://com.moneyveo/https/moneyveo.ua" />
</head>
<body>

    <h1>HTML HOME PAGE</h1>

    <a href="/apple-app-site-association">ios</a>

</body>
</html>
  `)
})



const some = require("./apple-app-site-association.json")
const str = JSON.stringify(some)
app.get('/apple-app-site-association', (req, res) => {
  console.log(some)
  // res.end(some)
  res.json(some)
})

app.listen(PORT, () => {
  console.log('APP STARTED  !!! --- http://localhost:8080')
})
