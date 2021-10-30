const http = require('http')
const fs = require('fs')

// import express
const express = require('express')
// initialize app instance using express
const app = express()



// if the url is root send the index.html file
app.get('/',(req, res)=>{
    res.send(`<h1>WELCOME TO EXPRESS SITE</h1>`)
})

// default error page if resource not found
app.all('*',(req,res)=>{
    res.status(404).send('404 ERROR PAGE NOT FOUND')
})

// listen to port 5000 for any incoming requests
app.listen(5000)