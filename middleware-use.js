
const express = require('express')
const app = express()

// import the middleware
// Its good to place your middleware in a separate file for easy readabilty of code
const logger = require('./logger')
const authorize = require('./authorize')

// Make the logger accessible to all routes
app.use([logger,authorize])

// apply to specific routes
// Applies logger function to all routes with API
app.use('/api',logger)

// root or home url
app.get('/',(req,res)=>{
    res.send('home')
})

// about page url
app.get('/about',(req,res)=>{
    res.send('about')
})
// products api
// Group of middleware are passed as a list
app.get('/api/products',[logger,authorize],(req,res)=>{
    res.send('items')
})


// initialize the server
app.listen(5000,()=>{
    console.log('server listening to port 5000..........')
})