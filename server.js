// Require http module
const http = require('http')

// Require fs module
const fs = require('fs')

// Require minimist module (make sure you install this one via npm).
var argv = require('minimist')

// Use minimist to process one argument `--port=` on the command line after `node server.js`.
argv = process.argv.slice(2)

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
var port = 0
if (argv[1]) {
    port = argv[1]
    // console.log(port)
} else {
    port = 4000
}

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.
var fileData
fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    fileData = data;
})


// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.
process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
})


// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(fileData)
})

// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})



// That's it! You're all done!
