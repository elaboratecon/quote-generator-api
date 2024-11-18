var express = require('express')
const cors = require('cors')
var app = express()

// set port
const PORT = 8000

// import quotes
const quotes = require('./quotes')

app.use(cors())

// GET request
app.get('/', (req, res) => {
    const quoteCount = quotes.length
    const randomQuote = quotes[Math.floor(Math.random() * quoteCount)]

    res.status(200).json(randomQuote)
})

app.listen(PORT, () => {
    console.log(`CORS-enabled web server listening on port ${PORT}...`)
})
