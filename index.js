const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

var myLogger = function (req, res, next) {
  console.log(Date.now() + " : request - " + req.body)
  next()
}

app.all(myLogger)

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/GetBook', (req, res) => res.send('Harry Potter'))
app.post('/GetAuthor', (req, res) => res.send('Harry Potter'))
app.post('/GetCover', (req, res) => res.sendFile('/source/bigdata-course/public/image/' + req.body.bookId))

app.use(express.static('public'))
app.listen(port, () => console.log(`app listening on port ${port}!`))
