let express = require('express')
let app = express()


// load static files
app.use(express.static(__dirname + '/public'))


// Define routes
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (req, res) => {
  res.sendFile(__dirname + '/views/works.html')
})

app.listen(3000)