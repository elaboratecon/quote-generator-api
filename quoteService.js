const quotes = require('./quotes')
const cors = require('cors')
var express = require('express')
const PORT = 8000

var app = express()
app.use(cors)
app.use(express.static('public'))

// GET request
app.get('/', (req, res) => {
    const quoteCount = quotes.length
    const randomQuote = quotes[Math.floor(Math.random() * quoteCount)]

    res.status(200).json(randomQuote)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
