const express = require('express')
const bookinfo = require('./routes/index')

const app = express()
const port = 3000

app.use('/', bookinfo)

app.listen(port, () => console.log(`app listening on port ${port}!`))
