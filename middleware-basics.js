// Middleware are functions that execute during request to the server
// Each middleware has access to request and response
// req => middleware => res


const express = require('express')
const app = express()
// import the middleware
// Its good to place your middleware in a separate file for easy readabilty of code
const logger = require('./logger')


// root or home url
app.get('/',logger,(req,res)=>{
    res.send('home')
})

// about page url
app.get('/about',(req,res)=>{
    res.send('about')
})

// initialize the server
app.listen(5000,()=>{
    console.log('server listening to port 5000..........')
})