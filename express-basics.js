// REQUESTS INCLUDE:
//     -get
//     -post
//     -put
//     -delete
//     -update


// import all required modules
const http = require('http')
const fs = require('fs')
const path = require('path')

// import express
const express = require('express')
// initialize app instance using express
const app = express()

// Points express to the static folder which contains html css and js code
app.use(express.static('./public'))


// if the url is root send the index.html file
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})

// default error page if resource not found
app.all('*',(req,res)=>{
    res.status(404).send('404 ERROR PAGE NOT FOUND')
})

// listen to port 5000 for any incoming requests
app.listen(5000)