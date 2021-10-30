
// import all required modules
const http = require('http')
const fs = require('fs')
const path = require('path')

// import express
const express = require('express')
// initialize app instance using express
const app = express()

// static files are files which do not have to be changed by server
// They are usually stored in a folder named public/ static

/*
// if the url is root send the index.html file
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})

*/

// To serve up HTML documents
// Their are two methods:
//    1. Adding the document to static assets - the index.html file will be recognised as root and
//                                               served once the server is started
//    2. Server side rendering


// listen to port 5000 for any incoming requests
app.listen(5000)