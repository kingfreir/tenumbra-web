const express = require('express')
var path = require("path")
const app = express()

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/public/index.html')))
app.use(express.static('public'))

app.listen(3000, () => console.log('Listening on 3000'))