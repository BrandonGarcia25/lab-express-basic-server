// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
require('dotenv').config()

var express = require ('express')
var logger = require ('morgan')

var apiRouter = require('./routes/api')


// CREATE EXPRESS APP
// Here you should create your Express app:
var app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(logger ('dev'))

app.get('/', (req, res, next) => {

    res.sendFile(__dirname + '/views/home.html')

})

app.get('/blog', (req, res, next) => {

    res.sendFile(__dirname + '/views/blog.html')
})

app.use('/api', apiRouter)



// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests



// ROUTES
// Start defining your routes here:



// START THE SERVER
// Make your Express server listen on port 5005:

app.listen(process.env.PORT, () => {
    console.log("server is listening on " + process.env.PORT)
})
