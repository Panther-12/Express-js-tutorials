// API - The server contains data 
// Any frontend site can perform a request to access the data which is then send in JSON format
// JSON format - refers to Javascript object notation

// example API : user requests for details about club member
//               express fetches the data from the database
//               it then sends a response in JSON format
//               React picks the response and uses it to create a GUI


// import express module
const express = require('express');
const app = express()

// import the json-data module
const {products,people} = require('./json-data')


// get the root url and send response in json format
/*
app.get('/',(req,res)=>{
    res.json(
        {'name':'nimrod',
        'age': 18,
        'home':'busia'
})
})
*/

app.get('/',(req,res)=>{
    res.json(products)
})


// start the server
app.listen(5000,()=>{
    console.log('server is listening..........')
})